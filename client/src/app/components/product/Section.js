"use client"

import { useEffect, useState } from "react";
import axios from "axios";
import LoadingRing from "../loading/loading";


export default function Product() {
  const products = [
    {
      _id: 1,
      imageUrl: "/PImages/p1.jpg",
      productName: "Product 1",
      productPrice: 100,
    },
    {
      _id: 2,
      imageUrl: "/PImages/p2.jpg",
      productName: "Product 2",
      productPrice: 200,
    },
    {
      _id: 2,
      imageUrl: "/PImages/p3.jpg",
      productName: "Product 2",
      productPrice: 200,
    },
    {
      _id: 3,
      imageUrl: "/PImages/p3.jpg",
      productName: "Product 2",
      productPrice: 200,
    },
    // Add more dummy products as needed
  ];


  // const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true);
  const apiUrl = `${process.env.NEXT_PUBLIC_API}/get`

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Simulating a delay of 1000 milliseconds before making the API call
        
  //       const response = await axios.get(apiUrl);
  //       if (response.status === 200) {              

  //         const productsWithImages = response.data.map((product) => {
  //           // const imageUrl = generateImageUrl(product.image);
  //           let imageUrl = `http://localhost:5000/public/images/${product.image}`

            
  //           return {
  //             ...product,
  //             imageUrl,
  //           };
  //         });
          
  //         setProducts(productsWithImages);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching products:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);


  return (
    <div>
    <div className="my-[2rem] sm:my-[5rem]">
    <div className="">
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:ml-7 sm:mr-7">
{
  products.map((product, index) => {
    return(
      
    <div key={product._id} className="bg-blue-100 px-3 py-3 rounded-lg">
<img 
    src={product.imageUrl}
    alt="Product Image"
    className=" rounded-lg mx-auto my-auto mb-4  h-[10rem] w-[17rem] lg:h-[18rem] "
    // changes were made here in the img class name
    // style={{maxWidth:'200px', maxHeight:'400px'}}
/>

<div className="text-center bg-blue-300 rounded-lg shadow-md cursor-pointer hover:bg-blue-200">
<p className="sm:text-md  font-semibold text-white text-sm">{product.productName}</p>
<p className=" text-white text-normal">₦{product.productPrice}</p>     
{/* {loading ? <LoadingRing/> : ''}             */}
</div>

    </div>      
    )
  })
}



    </div>        
    </div>
    </div>      
    </div>



  )
}
