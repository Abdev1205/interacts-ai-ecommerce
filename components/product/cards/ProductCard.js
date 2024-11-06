// components/ProductCard.js
import Image from 'next/image';
import { useState } from 'react';
import { ShimmerThumbnail, ShimmerTitle } from "react-shimmer-effects";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { MdAddShoppingCart } from "react-icons/md";
import WishlistIcon from '@/components/common/notify/WishlistIcon';
import { IoHeartOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/lib/redux/slices/cartSlice';
import { addToWishlist, removeFromWishlist } from '@/lib/redux/slices/wishlistSlice';
import { IoIosHeart } from "react-icons/io";
import { useRouter } from 'nextjs-toploader/app';




export const ProductCardSkelton = () => {
  return (
    <div className="relative  bg-white border rounded-lg p-[1rem] w-[17rem] h-[18rem] flex flex-col  ">
      <ShimmerThumbnail width={240} height={150} />

      <div className="mt-4">
        <ShimmerTitle line={1} gap={10} />
      </div>

      <div className="flex items-center justify-between mt-2">
        <ShimmerTitle line={1} gap={10} width={60} />
        <ShimmerTitle line={1} gap={10} width={40} />
      </div>
    </div>
  )
}

const ProductCard = ({ product }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter()
  const wishlistItems = useSelector(state => state.wishlist.items);

  const isWishlisted = wishlistItems.some(item => item.id === product.id);

  const handleToggleWishlist = () => {
    if (isWishlisted) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, amount: 1 }));
  };

  if (!product) {
    return <ProductCardSkelton />;
  }
  return (
    <div className="relative  bg-white border rounded-lg p-[1rem] w-[17rem] h-[18rem] flex flex-col group  ">

      <div className="relative flex items-center w-full h-[11rem] justify-center  ">
        {!imageLoaded && <ShimmerThumbnail width={240} height={192} />}
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          onLoadingComplete={() => setImageLoaded(true)}
          onClick={() => router.push(`/product/${product.id}`)}
          className={`${imageLoaded ? 'opacity-100' : 'opacity-0'} w-[8rem] h-full cursor-pointer   object-contain `}
        />
        <div onClick={handleToggleWishlist} className=' text-[1.5rem] absolute right-[-.5rem] top-0 cursor-pointer  ' >

          {isWishlisted ? (
            <IoIosHeart className="text-2xl text-red-500" /> // Filled heart icon for wishlisted
          ) : (
            <IoHeartOutline className="text-2xl text-gray-500" /> // Outline heart icon for non-wishlisted
          )}
        </div>

      </div>

      {/* Discount Badge */}
      <span className="absolute px-[.3rem] py-1 text-[.65rem] font-poppins font-400 text-white bg-red-500 rounded top-[.5rem] left-[.5rem] ">
        30{product.discount}%
      </span>



      {/* Product Info */}
      <div className="mt-4 ">
        <h3 className="text-lg font-semibold line-clamp-1">{product.title}</h3>
        <div className="flex ">
          <span className="text-[.9rem] font-bold text-red-500">${product.price}</span>
        </div>
        <div className="flex gap-[.3rem] ">
          <Rating
            style={{ maxWidth: 80 }}
            value={product.rating.rate}
            readOnly
          />
          <div className=' text-[.8rem] ' >({product.rating.count})</div>
        </div>
      </div>
      <div onClick={() => handleAddToCart(product)} className="absolute bottom-[.5rem] right-[.5rem] flex items-center justify-center size-[2rem] rounded-full transition-opacity duration-300 bg-black  opacity-0 group-hover:opacity-100">
        <button className="px-4 py-2 text-white "><MdAddShoppingCart /></button>
      </div>
    </div>
  );
};

export default ProductCard;
