'use client'
import { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri"
import LgNav from "../components/nav/lgNav";
import MobileNav from "../components/nav/MobileNav";
import LoadingRing from "../components/loading/loading";
import axios from "axios";
import {toast} from 'react-toastify'

 interface Products  {

    imageUrl:string,
    _id:string,
    productName:string,
    productPrice:string


 }
 
export default function page() {


    

    const [products, setProducts] = useState<Products[]>([])
    const [loading, setLoading] = useState(true);

      const apiUrl = `${process.env.NEXT_PUBLIC_API}/get`

      useEffect(() => {
        const fetchData = async () => {
          try {
            // Simulating a delay of 1000 milliseconds before making the API call
            
            const response = await axios.get(apiUrl);
            if (response.status === 200) {              

              const productsWithImages = response.data.map((product : any) => {
                // const imageUrl = generateImageUrl(product.image);
                let imageUrl = `http://localhost:5000/public/images/${product.image}`

                
                return {
                  ...product,
                  imageUrl,
                };
              });
              
              setProducts(productsWithImages);
              setLoading(false);
            }
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
    
        fetchData();
      }, []);

      const handleDelete = async (productId: string) => {

        try{          

          await axios.delete(`${process.env.NEXT_PUBLIC_API}/delete/${productId}`);
          setProducts((prevProducts) => prevProducts.filter((product) => product._id !== productId));
            toast.success("Product Successfully Deleted")

        } catch (error){
          console.error('Error deleting product:', error)
          toast.error("Product Not deleted")
        }
      }


  return (
    <main>
        <LgNav/>    
    <div className="relative top-28">
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ml-7 mr-7">
{
   products.length === 0 ?   
   <div className="mt-[10rem] bg-white text-center flex justify-center p-[1rem]">
   <p className="uppercase font-bold">No Products have been added</p>
 </div>  : (products.map((product, index) => {
    
    return(
      
    <div key={product._id} className="bg-white  px-3 py-3 rounded-lg">
<img 
    src={product.imageUrl }
    alt="Product Image"
    className="rounded-lg mx-auto my-auto mb-4 h-[30rem] sm:w-[20rem] sm:h-[30rem]"
/>
    <div className="flex justify-end relative mb-2"> 
    <div  className="hover:bg-gray-200 rounded-3xl p-2">
    <RiDeleteBin6Line onClick={() => handleDelete(product._id)} size={30} color="#DC143C" className="cursor-pointer"/>
    </div>
    </div>
<div className="text-center bg-Gold rounded-lg shadow-md cursor-pointer hover:bg-yellow-300">
<p className="text-lg font-semibold text-white ">{product.productName}</p>
<p className=" text-white">₦{product.productPrice}</p>     
{loading ? <LoadingRing/> : ''}            
</div>

    </div>      
    )
  }))


 } 



    </div>        
    </div>
    <MobileNav/>
    </main>


  )
}
