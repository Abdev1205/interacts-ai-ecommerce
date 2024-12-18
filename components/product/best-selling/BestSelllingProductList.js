'use client'

import api from '@/lib/constants/AxiosInstance';
import React, { useEffect, useState } from 'react'
import ProductCard, { ProductCardSkelton } from '../cards/ProductCard';
import PrimaryButton from '@/components/common/Button/PrimaryButton';

const BestSelllingProductList = () => {
  const [bestProduct, setBestProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from API
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await api.get('/products');
      setBestProducts(res.data);
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>

      <div className="flex flex-wrap gap-[1.5rem] mt-[4rem] ">
        {loading
          ? Array.from({ length: 5 }).map((_, index) => <ProductCardSkelton key={index} />)
          : bestProduct.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}

      </div>
      <PrimaryButton data={{ title: "View All Products", execute: () => alert("Button pressed") }} style={' w-fit mx-auto mt-[2rem] '} />
    </>
  );

}

export default BestSelllingProductList
