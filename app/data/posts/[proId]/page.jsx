'use client'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Roboto} from 'next/font/google'
import Image from 'next/image'


const roboto = Roboto({
  subsets:['latin'],
  display:'swap',
  weight:'500'
})


export default function Page(productId) {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId.params.proId}`);
        setProducts(response.data);

      
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, []);

  console.log(productId)
  console.log(products)
  return (
    <div className={roboto.className}>
      <h3>{products.id}</h3>
      <h3>{products.title}</h3>
      <h3>{products.description}</h3>
      <h3>{products.price}</h3>
      <img 
        src={products.image} 
        width={500} 
        height={400} 
        
        
        />



    </div>
  )
}