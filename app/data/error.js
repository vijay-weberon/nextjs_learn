'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

const error = ({error,reset}) => {
    useEffect(()=>{
        console.log("Error",error.message)
    },[error])
    
  return (
    <div>
        <h1>An error has been accured in data page</h1>
       <h3>The error message is </h3>
        <p className="text-danger">{error.message}</p>
        
        </div>
  )
}

export default error