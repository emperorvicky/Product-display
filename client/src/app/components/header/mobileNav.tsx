"use client"
import { MdHome } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaInfo } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";


export default function mobileNav() {

  return (
    <div className="fixed bottom-0 w-full bg-gray-700 shadow-lg rounded-2xl text-white sm:hidden ">
    <div className="container mx-auto flex justify-between">
      <a href="/" className="block text-center py-4 px-1 ">
        <MdHome className="ml-3" size={25}/>
        <p className="text-sm font-bold">Home</p>
      </a>
      <a href="/products" className="block py-4 px-1  ">
      <MdOutlineProductionQuantityLimits className="ml-5" size={25}/>
        <p className="text-sm font-bold">Products</p>
        
        </a>
      <a href="/about-us" className="block py-4 px-1 ">
      <FaInfo className="ml-4" size={25}/>
        <p className="text-sm font-bold">About us</p>
        </a>
      <div className="flex py-4 px-3 ">
      <a href="#footer" className="block hover:text-gray-200">
      <FaPhoneAlt className="ml-5" size={25}/>
        <p className="text-sm font-bold">Contact us</p>
        </a>        
      </div>

    </div>
    </div>
  )
}



// import React from 'react'

// export default function Menu({closeMenu}) {
//     const handleMenuItemClick = () => {
//         closeMenu()
//     }
//     return (
//     <div className=" slide-in-top relative lg:hidden xl:hidden md:hidden  list-none" role="navigation">
//     <div className="border pl-[3rem] border-gray-200  opacity-20 w-[60rem] relative right-[7rem]"></div>
//     <div className="  w-full pl-2 text-center">
//     <li className="text-xl font-semibold text-gray-50 py-2 hover:text-gray-300 cursor-pointer" onClick={handleMenuItemClick}>
//       <a href='/'>Home</a>  
//         </li>
//     <div className="border border-white mx-[5rem]"></div>
//     <li  className="text-xl font-semibold text-white py-2 hover:text-gray-300 cursor-pointer"  onClick={handleMenuItemClick}>
//      <a href='/products'>Products</a>   
//     </li>
//     <div className="border border-white mx-[5rem]"></div>
//     <li className="text-xl font-semibold text-white py-2 hover:text-gray-300 cursor-pointer"  onClick={handleMenuItemClick}>
//        <a href='about-us'>About us</a> 
//         </li>
//     <div className="border border-white mx-[5rem]"></div>
//     <li className="text-xl font-semibold text-white py-2 hover:text-gray-300 cursor-pointer"  onClick={handleMenuItemClick}>
//         <a href='#footer'>Contact us</a>
//     </li>     
//     <div className="border border-white mx-[5rem]"></div>   
//     <li className="text-xl font-semibold text-white py-2 hover:text-gray-300 cursor-pointer"  onClick={handleMenuItemClick}>
//         <a href='/admin-form'>Admin</a>
//     </li>
//     </div>


//     </div>
//   )
// }
