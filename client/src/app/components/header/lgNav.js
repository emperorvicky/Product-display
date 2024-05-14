'use client'
export default function LgNav() {
  return (
    <header className=' hidden sm:inline '>
        <nav className="bg-gray-700 shadow-lg w-full fixed top-0 z-10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16">
      <div className="flex">

        <a href='/' className="cursor-pointer flex-shrink-0 flex items-center">
          <img className="h-10 w-auto" src="/logo/logo.png" alt="Logo"/>
        </a>

        <div className="hidden sm:-my-px sm:ml-6 sm:flex space-x-4">
          <a href="/" className="inline-flex items-center px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300">
            Home
          </a>
          <a href="/products" className="inline-flex items-center px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300">
          Product
          </a>
          <a href="/about-us" className="inline-flex items-center px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300">
            About us
          </a>
          <a href="#footer" className="inline-flex items-center px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300">
          Contact us
          </a> 
        </div>
      </div>


      {/* <div  className="hidden sm:flex sm:items-center sm:ml-6">
        <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-gray-700 hover:bg-gray-600">
          Log out
        </button>
      </div> */}



    </div>
  </div>


  <div className="sm:hidden" id="mobile-menu">
    <div className="px-2 pt-2 pb-3 space-y-1">
      <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300">Home</a>
      <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300">About</a>

    </div>
  </div>
</nav>

    </header>
  )
}
// import { IoMdMenu } from "react-icons/io";
// import { GiCancel } from "react-icons/gi";
// import { useState, useRef, useEffect } from "react";
// import Menu from "./menu"

// export default function Header() {

//   const [isVisble, setIsVisible] = useState(false);

//   const handleVisible = () => {
//     setIsVisible(!isVisble)
//   }
// ;

// const closeMenu = () => {
//   setIsVisible(false);
// };


// const menuRef = useRef(null);
// useEffect(() => {
//   const handleClickOutside = (event) => {
//     if (menuRef.current && !menuRef.current.contains(event.target)) {
//       closeMenu();
//     }
//   };

//   document.addEventListener("mousedown", handleClickOutside);

//   return () => {
//     document.removeEventListener("mousedown", handleClickOutside);
//   };
// }, [menuRef]);

//   return (
//     <header id="top"  className='bg-gray-700 sm:p-4  shadow-md w-full fixed top-0 z-20 '>
 
//     <div className='container mx-auto px-4 py-2'>
//     <nav className='flex items-center sm:justify-normal lg:justify-normal'>
//     <div className="flex items-center">
//     <div className="flex items-center ">
//       <div>
//             <img 
//     src="/logo/logo1.png" 
//     style={{maxWidth:'200px'}} 
//     className="text-white text-xl font-semibold uppercase hidden md:inline lg:inline xl:inline"
//     />
//     <img
//     src="/logo/logo.png" 
//     alt="Company logo"    
//     className="rounded-xl w-16 md:hidden lg:hidden xl:hidden"
//     style={{maxWidth:'200px'}}
//     />
//       </div>
//       <div onClick={handleVisible} className="relative ml-[14rem] vsm:ml-[23rem] p-3 text-end  left-0 sm:ml-[29rem] lg:hidden xl:hidden md:hidden  before:absolute before:inset-0 before:opacity-0 before:bg-white before:rounded-3xl before:transition-opacity before:ease-in-out hover:before:opacity-10 hover:before:rounded-3xl cursor-pointer">
//      {isVisble? <GiCancel color="#fff" size={30}/>: <IoMdMenu color="#fff" size={30}/> } 
//     </div> 


//     </div>


//     </div>
//     <ul className="space-x-4 md:ml-[3rem] hidden md:inline lg:inline xl:inline lg:relative lg:left-[15rem] ">
//     <a href="/" className="text-white text-xl">Home</a>
//     <a href="/products" className="text-white text-xl">Product</a>
//     <a href="/about-us" className="text-white text-xl">About us</a>
//     <a href="#footer" className="text-white text-xl">Contact us</a> 
//     <a href="/admin-form" className="text-white text-xl">Admin</a>      
//     </ul>

//   </nav>       
      
//       </div>
//       {/* this is menu bar */}
// {isVisble ? <Menu closeMenu={closeMenu}/> : ''}
//     </header>
//   )
// }

