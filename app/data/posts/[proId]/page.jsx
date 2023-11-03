'use client'
import React, { useState, useEffect } from 'react'
import axios from 'axios'


//  async function generateMetadata(productId) {


//     const response = await axios.get(`https://fakestoreapi.com/products/${productId.params.userId}`);
//         const product = response.data;


//       return {title:product.title}
//     }


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
    <div>
      <h3>{products.id}</h3>
      <h3>{products.title}</h3>
      <h3>{products.description}</h3>
      <h3>{products.price}</h3>



    </div>
  )
}