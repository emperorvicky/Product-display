'use client'

import { jost, dmSerif } from "../home/sect1"
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";


export default function Footer() {

  return (
    <div id="footer" className="mb-[7rem]">
        <div className="block sm:grid sm:grid-cols-3 rounded-md mx-4 bg-gray-100 lg:mx-[7rem]">
        <div className="flex items-center justify-center sm:mr-[1rem]">
            <img src="/logo/logo3.jpg" className="w-[3rem] rounded-md"/>
            <div className="pl-2">
            <h1 className={`${dmSerif.className}`}>NITOO</h1>
            <p className={`${jost.className} text-sm`}>
            Elevating Hygiene, Enriching Spaces.
            </p> 
            <div className="mt-2 flex gap-x-4">
             <FaFacebook  size={20} color="blue" className="cursor-pointer"/> 
            <a href="https://wa.me/+2349168362425?text=Hello%20I%20would%20like%20to%20make%20more%20enquires%20on%20Nitoo%20Products">
            <FaWhatsapp 
            href="https://wa.me/+2349168362425?text=Hello%20I%20would%20like%20to%20make%20more%20enquires%20on%20Nitoo%20Products" 
            size={20} 
            color="green" 
            className="cursor-pointer"
            />
            </a>
            <RiTwitterXLine size={20} className="cursor-pointer"/>
            <FaInstagram size={20} color="red" className="cursor-pointer" />
            </div>               
            </div>

        </div>
        <div className="block text-center mt-[1rem] sm:mt-[3.7rem] ">
          <h1 className={`${dmSerif.className}`}>Pages</h1>
          <div>
            <a href="/" className={`${jost.className} cursor-pointer block`}>Home</a>
            <a href="/products" className={`${jost.className} cursor-pointer block`}>Products</a>
            <a href="/about-us" className={`${jost.className} cursor-pointer`}>About us</a>
          </div>
        </div>
        <div className="block mt-[1rem] text-center sm:mt-[3.7rem]">
          <h1 className={`${dmSerif.className}`}>Contact us</h1>
          <p className={`${jost.className} text-sm`}>Ogun Guangdong Free Trade Zone,</p>
          <p className={`${jost.className} text-sm`}>Igbesa, Ogun State, Nigeria</p>
          {/* <p className={`${jost.className} text-sm`}>Nigeria</p> */}
          <p className={`${jost.className} text-sm mt-[2rem]`}>Tel: +86 176 8863 7068 Alina</p>
          <p className={`${jost.className} text-sm`}>+234 908 226 0919</p>
        </div>

        </div>
    </div>
  )
}

// import { FaWhatsapp } from "react-icons/fa";


// export default function Footer() {

  
//   function scrollToSection() {
//     const targetSection = document.getElementById('top');
  
//     if (targetSection) {
//       targetSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   }




  
//   const currentDate = new Date
//   const currentYear = currentDate.getFullYear();
//   return (

//     <div id="footer" className="bg-gray-600 mt-36 w-full">
//         <div >
//         <div className="py-[5rem] px-[5rem] relative ">
//             <h2 className="text-white text-2xl font-thin">Contact Details</h2>
//             <div className="py-[2rem]">
//             <p className="text-white font-bold">NITOO</p>
//             <p className="text-white uppercase">Ogun Guangdong Free Trade Zone,</p>
//             <p className="text-white uppercase">Igbesa, Ogun State, Nigeria</p> 
//             </div>

//             <div className="pb-8">
//              <p className="text-white"> Tel: +86 176 8863 7068 Alina</p>
//              <p className="text-white"> Tel: +234 908 226 0919</p>

//              <a href="https://wa.me/+2349168362425?text=Hello%20I%20would%20like%20to%20make%20more%20enquires%20on%20Nitoo%20Products" className="text-green-500 hover:text-green-300 active:text-green-600 flex items-center"><FaWhatsapp className="mr-2" /> +234 814 576 7443</a>
//             </div>
//             <div>
//               <p className="text-white">Email:Nitoosanitaryfze@gmail.com</p>
//             </div>

//         </div>
//         </div>
//     <div className="flex items-center justify-between bg-gray-900">
//       <div className="py-6">
//       <a className="text-xl pl-6 text-white" href="#">NITOO © 2019</a>
//       <a href="#" className="pl-3 text-xl text-white">Legal Notice</a>
//       <a href="#" className="pl-3 text-xl text-white">Terms</a>
//       <a href="#" className="pl-3 text-xl text-white">Copyright {currentYear} NITOO |   All Rights Reserved </a>     
//       </div>

//     <div className="flex justify-between space-x-3">
            
//         </div>

//     <div>

    
//     </div>
//     </div>
//     </div>
//   )
// }
