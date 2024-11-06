'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux'; // Import for Redux
import api from '@/lib/constants/AxiosInstance';
import Image from 'next/image';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import FastDeliveryIcon from '@/components/customIcon/FastDeliveryIcon';
import ReturnProductIcon from '@/components/customIcon/ReturnProductIcon';
import { addToCart, decrease, getCartTotal, removeFromCart } from '@/lib/redux/slices/cartSlice';
import { addToWishlist, removeFromWishlist } from '@/lib/redux/slices/wishlistSlice';

const ProductPage = ({ params }) => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch(); // Initialize dispatch
  const router = useRouter();
  const { id } = params; // Access id here

  // Access wishlist and cart items from the Redux store
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const isWishlisted = wishlistItems.some(item => item.id === product?.id);
  const isInCart = cartItems.some(item => item.id === product?.id);

  const fetchProduct = async () => {
    try {
      console.log("Api called");
      const res = await api.get(`/products/${id}`); // Use params.id here dynamically
      setProduct(res.data);
      console.log(res.data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, amount: 1 }));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
  };

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product));
  };

  const handleIncreaseQuantity = (item) => {
    dispatch(addToCart(item));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decrease(id));
  };

  const handleRemoveFromWishlist = () => {
    dispatch(removeFromWishlist(product.id));
  };

  const handleQuantityChange = (change) => {
    setQuantity(prevQuantity => Math.max(prevQuantity + change, 1)); // Ensure quantity stays at 1 or more
  };

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cartItems, dispatch]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="flex items-start px-[4rem] w-full justify-center p-8">
      {/* Product Image */}
      <div className="flex-1 w-[46%] h-[30rem]">
        <Image
          src={product?.image}
          width={600}
          height={500}
          alt={product.title}
          className="object-contain w-full h-full rounded-md"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col flex-1 gap-6 px-8">
        {/* Title and Reviews */}
        <div>
          <h1 className="text-2xl font-semibold">{product.title}</h1>
          <div className="flex gap-[.3rem]">
            <Rating style={{ maxWidth: 80 }} value={product.rating?.rate} readOnly />
            <div className='text-[.8rem]'>({product.rating?.count})</div>
          </div>
        </div>

        {/* Price */}
        <div className="text-3xl font-bold text-gray-900">${product.price?.toFixed(2)}</div>

        {/* Product Description */}
        <p className="text-gray-700">{product?.description}</p>

        {/* Colors */}
        <div className="flex items-center gap-4">
          <span className="font-medium">Colours:</span>
          <div className="flex gap-2">
            <span className="w-6 h-6 bg-red-500 rounded-full"></span>
            <span className="w-6 h-6 bg-gray-500 rounded-full"></span>
          </div>
        </div>

        {/* Size Selection */}
        <div className="flex items-center gap-4">
          <span className="font-medium">Size:</span>
          <div className="flex gap-2">
            {['XS', 'S', 'M', 'L', 'XL'].map(size => (
              <button
                key={size}
                className="px-3 py-1 transition border border-gray-300 rounded-md hover:border-black"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity and Add to Cart Button */}
        <div className="flex items-center gap-4">
          {/* Quantity Selector */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                handleQuantityChange(-1)
                handleDecreaseQuantity(product.id)
              }
              }
              className="px-2 py-1 border border-gray-300 rounded-md"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => {
                handleQuantityChange(1)
                handleIncreaseQuantity(product)
              }
              }
              className="px-2 py-1 border border-gray-300 rounded-md"
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          {isInCart ? (
            <button onClick={handleRemoveFromCart} className="px-6 py-2 text-white transition bg-gray-600 rounded-md hover:bg-gray-700">
              Remove from Cart
            </button>
          ) : (
            <button onClick={() => handleAddToCart(product)} className="px-6 py-2 text-white transition bg-red-600 rounded-md hover:bg-red-700">
              Add to Cart
            </button>
          )}

          {/* Wishlist Button */}
          {isWishlisted ? (
            <button onClick={handleRemoveFromWishlist} className="p-2 text-red-500 transition border border-gray-300 rounded-md hover:border-black">
              ❤️ Remove from Wishlist
            </button>
          ) : (
            <button onClick={handleAddToWishlist} className="p-2 transition border border-gray-300 rounded-md hover:border-black">
              ❤️ Add to Wishlist
            </button>
          )}
        </div>

        {/* Delivery Information */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <FastDeliveryIcon />
            <div>
              <p className="font-medium">Free Delivery</p>
              <p className="text-sm text-gray-600">Enter your postal code for Delivery Availability</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ReturnProductIcon />
            <div>
              <p className="font-medium">Return Delivery</p>
              <p className="text-sm text-gray-600">Free 30 Days Delivery Returns</p>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default ProductPage;
