import Link from 'next/link'
import React from 'react'
import axios from 'axios'

//Exporting a dynamic metadata
export async function generateMetadata(productId) {
     const response = await axios.get(`https://fakestoreapi.com/products/${productId.params.proId}`);
        const product = response.data;
        console.log('product',product.title)
      return {title:product.title}
    }


// Exporting a static metadata
    // export const metadata={
    //   title:"Products"
    // }
    
const layout = ({children}) => {
  return (
    <div>Selected Product
        {children}
        <p>To go to all products click the button</p>
        <Link href='../posts/data'><button>Click</button></Link>
    </div>
  )
}

export default layout