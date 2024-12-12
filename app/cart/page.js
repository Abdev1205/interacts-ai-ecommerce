'use client'

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, decrease, getCartTotal } from '@/lib/redux/slices/cartSlice';
import Image from 'next/image';
import { MdCancel } from "react-icons/md";
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK);

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cartItems, dispatch]);

  const handleIncreaseQuantity = (item) => {
    dispatch(addToCart(item));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decrease(id));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const response = await stripe.redirectToCheckout({
      mode: 'subscription',
      lineItems: [
        {
          price: 'price_1QV5CmSHHOgVaSBAPrIUBnPn',
          quantity: 1,
        },
      ],
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}/cancel`,
    });

    if (response.error) {
      console.error(response.error.message);
    }
  };

  return (
    <div className="container px-[4rem] mt-[3rem] mx-auto">
      <div className="flex flex-wrap gap-8">
        <div className="flex-1 p-4 bg-white border rounded-lg">
          <h2 className="mb-6 text-2xl font-bold">Shopping Cart</h2>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="pb-4">Product</th>
                <th className="pb-4">Price</th>
                <th className="pb-4">Quantity</th>
                <th className="pb-4">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="relative flex items-center gap-4 py-4">
                    <button onClick={() => handleRemoveFromCart(item.id)} className="absolute font-bold top-0 left-[-.5rem] text-red-500">
                      <MdCancel />
                    </button>
                    <Image src={item.image} width={400} height={400} alt={item.title} className="object-cover w-16 h-16" />
                    <span>{item.title}</span>
                  </td>
                  <td className="py-4">${item.price}</td>
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleDecreaseQuantity(item.id)}
                        className="px-2 bg-gray-200 rounded"
                      >
                        -
                      </button>
                      <span>{item.amount}</span>
                      <button
                        onClick={() => handleIncreaseQuantity(item)}
                        className="px-2 bg-gray-200 rounded"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="py-4">${(item.price * item.amount).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex items-center justify-between mt-8">
            <button className="px-4 py-2 border rounded">Return To Shop</button>
            <button className="px-4 py-2 text-white bg-gray-800 rounded">Update Cart</button>
          </div>
        </div>
        <div className="w-full max-w-sm p-6 bg-white border rounded-lg">
          <h2 className="mb-4 text-xl font-bold">Cart Total</h2>
          <div className="py-2 border-b">
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
          </div>
          <div className="flex justify-between py-4 text-lg font-bold">
            <span>Total:</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
          <button
            className="w-full py-3 mt-4 text-white bg-red-500 rounded-lg"
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
      <div className="flex gap-4 mt-8">
        <input
          type="text"
          placeholder="Coupon Code"
          className="flex-1 p-2 border rounded"
        />
        <button className="px-4 py-2 text-white bg-red-500 rounded">Apply Coupon</button>
      </div>
    </div>
  );
};

export default CartPage;
