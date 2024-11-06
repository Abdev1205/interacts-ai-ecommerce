'use client';

import RoleTypeInput from '@/components/common/userType/roleTypeInput';
import { SignUpButton, useUser } from '@clerk/nextjs';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { RiAdminFill, RiUser3Fill } from 'react-icons/ri';
import { AiFillShop } from 'react-icons/ai';

export default function LoginPage() {
  const search = useSearchParams();
  const { user, isLoaded, isSignedIn } = useUser();
  const role = search.get('role');
  const [userType, setUserType] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      const userRole = user?.publicMetadata?.role;
      if (userRole) {
        router.push(`/dashboard/${userRole}`);
      } else {
        router.push(`/dashboard`);
      }
    }
  }, [isLoaded, isSignedIn, user, router]);

  useEffect(() => {
    if (userType) {
      router.push(`/login?role=${userType}`);
    }
  }, [userType, router]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  const submitData = () => {
    if (userType) {
      console.log('role submit data is called');
      router.push(`/login?role=${userType}`);
    }
  };

  if (isLoaded && !isSignedIn) {

    return (
      <>

        <div className="w-[100%] h-[calc(100vh-4rem)] flex flex-col justify-center items-center gap-[1rem]">
          <h2 className="text-[2rem] font-poppins font-[600] tracking-wide mb-[3rem]">Select your Role</h2>
          <div className="flex justify-center items-center gap-[8rem]">
            <RoleTypeInput
              user="user"
              icon={<RiUser3Fill />}
              setUserType={setUserType}
              userType={userType}
            />
            <RoleTypeInput
              user="seller"
              icon={<AiFillShop />}
              setUserType={setUserType}
              userType={userType}
            />
            <RoleTypeInput
              user="admin"
              icon={<RiAdminFill />}
              setUserType={setUserType}
              userType={userType}
            />
          </div>
          <button
            onClick={submitData}
            className="flex justify-center items-center gap-[.3rem] bg-primary text-white w-[10rem] px-[.5rem] py-[.5rem] rounded-md mt-[6rem]"
          >
            <SignUpButton forceRedirectUrl={`/dashboard?role=${role}`} />
            <MdKeyboardDoubleArrowRight className="text-[1.3rem]" />
          </button>
        </div>
      </>
    );
  }
}
