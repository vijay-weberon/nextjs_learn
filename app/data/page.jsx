'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';


export const runtime = 'nodejs'

const Page = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            
              <p>{product.title}</p>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
