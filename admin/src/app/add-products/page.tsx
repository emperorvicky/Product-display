'use client'

import { useState, useEffect } from "react";
import { useForm} from "react-hook-form";
import LgNav from "../components/nav/lgNav";
import MobileNav from "../components/nav/MobileNav";
import {Archivo_Narrow, } from "next/font/google";
import LoadingRing from "../components/loading/loading";
import axios from "axios";
import {toast} from 'react-toastify'

const Archivo = Archivo_Narrow({ subsets:["latin-ext"]})

export default function page() {
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);

    const apiUrl = `${process.env.NEXT_PUBLIC_API}/add`

    const onSubmit = async (data :any) => {
        const { productName, productPrice, image } = data;
        if(productName === ""){
          toast.error("Product Name Field is Empty");
        } else if( productPrice){
          toast.error("Product Price Field Is Empty");
        } else if(image === ""){
          toast.error("No Image Has Been Inserted");
        }
        
        if (image[0] && image[0].size > 4 * 1024 * 1024) {
          toast.error("Image Size Exceeds The Limit (4MB).");
          return;
      }

        const productData = new FormData();
        productData.append('productName', productName);
        productData.append('productPrice', productPrice);
        productData.append('image', image[0]);      
      
        setLoading(true);
        axios
          .post(apiUrl, productData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((response) => {
            if (response.status === 200 || response.status === 201) {
              toast.success(response.data.message);
              setLoading(false);
            } else {
              toast.error(response.data.message);
            }
          })
          .catch((error) => {
            if (error.response) {
              toast.error("Product Wasn't added, fault from the server");
            }
          })
      };
      
      
  return (
    <main>
    <LgNav />
   <div className="flex items-center justify-center h-screen px-8">
    <form 
    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    onSubmit={handleSubmit(onSubmit)}>
        <h1 className={`text-center text-2xl text-gray-900 bold mb-4 uppercase ${Archivo.className}`}>Add a New Product</h1>
    <div className="mb-4">
    <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    type="text"
    placeholder="Product Name"
    {...register("productName")}
    />
    </div>
    <div className="mb-4">
    <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    type="text"
    placeholder="Product Price"
    {...register("productPrice")}
    />
    </div>
    <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
    Upload Product Image
  </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="file"
        accept="image/*"
        {...register('image', { required: 'Image is required' })}
      />        
    </div>      
    <div className="mb-6 text-center">
      <button 
      type="submit"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        {loading ? <LoadingRing /> : 'Submit'}
      </button>   
   
    </div>


    </form>

    </div> 
    <MobileNav/>       
    </main>
 
  )
}
