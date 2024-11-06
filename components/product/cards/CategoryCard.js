'use client'

import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";


const CategoryCard = ({ data }) => {
  const { id, title, icon } = data;
  const search = useSearchParams();
  const category = search.get('categories')
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div onClick={() => router.push(`${pathname}?categories=${title}`)} className={`rounded-md w-full h-[10rem]  border p-[1rem] text-[.8rem] flex flex-col items-center justify-center gap-[.7rem] ${category == title || !category && title == "Camera" ? " bg-primary text-white " : ""} hover:bg-primary hover:text-white cursor-pointer duration-300 `} >
      {icon}
      <h2>{title}</h2>
    </div>
  )
}

export default CategoryCard
