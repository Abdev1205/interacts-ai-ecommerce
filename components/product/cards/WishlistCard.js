'use client'

import Image from "next/image";
import { useState } from "react";
import { ShimmerThumbnail } from "react-shimmer-effects";
import { MdAddShoppingCart } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { ProductCardSkelton } from "./ProductCard";

const WishlistCard = ({ product, onAddToCart, onRemoveFromWishlist }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  if (!product) return <ProductCardSkelton />;

  return (
    <div className="relative  bg-white border rounded-lg p-[1rem] w-[17rem] h-[rem] flex flex-col group">
      <div className="relative flex items-center justify-center h-40">
        {!imageLoaded && <ShimmerThumbnail width={240} height={192} />}
        <Image
          src={product.image}
          alt={product.name}
          width={240}
          height={240}
          onLoadingComplete={() => setImageLoaded(true)}
          className={`${imageLoaded ? "opacity-100" : "opacity-0"
            } object-contain w-full h-full`}
        />
        {onRemoveFromWishlist && (
          <IoTrashOutline
            className="absolute text-2xl cursor-pointer top-2 right-2"
            onClick={onRemoveFromWishlist}
          />
        )}
      </div>

      {/* Discount Badge */}
      {product.discount && (
        <span className="absolute px-2 py-1 text-xs text-white bg-red-500 rounded top-2 left-2">
          {product.discount}% OFF
        </span>
      )}

      {/* Product Info */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold line-clamp-1">{product.title}</h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-lg font-bold text-red-500">${product.price}</span>
          {product.oldPrice && (
            <span className="text-sm text-gray-500 line-through">${product.oldPrice}</span>
          )}
        </div>
        <div className="flex items-center gap-1 mt-1">
          <Rating value={product.rating.rate} readOnly style={{ maxWidth: 80 }} />
          <span className="text-sm">({product.rating.count})</span>
        </div>
      </div>

      <button
        onClick={onAddToCart}
        className="flex items-center justify-center gap-2 px-4 py-2 mt-4 text-white bg-black rounded"
      >
        <MdAddShoppingCart />
        Add To Cart
      </button>
    </div>
  );
};

export default WishlistCard;
