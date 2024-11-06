'use client'

import WishlistCard from '@/components/product/cards/WishlistCard';
import { addToCart } from '@/lib/redux/slices/cartSlice';
import { moveAllToCart, removeFromWishlist } from '@/lib/redux/slices/wishlistSlice';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const WishlistPage = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, amount: 1 }));
    dispatch(removeFromWishlist(product.id));
  };

  const handleMoveAllToCart = () => {
    dispatch(moveAllToCart());
  };

  return (
    <div className="px-[4rem] mt-[3rem] ">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Wishlist ({wishlistItems.length})</h2>
        <button
          onClick={handleMoveAllToCart}
          className="px-4 py-2 text-black border-2 border-black rounded-md"
        >
          Move All To Cart
        </button>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {wishlistItems.map((product) => (
          <WishlistCard
            key={product.id}
            product={product}
            onAddToCart={() => handleAddToCart(product)}
            onRemoveFromWishlist={() => dispatch(removeFromWishlist(product.id))}
          />
        ))}
      </div>
    </div>
  );
};

export default WishlistPage
