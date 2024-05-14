"use client"
import { deleteCookies } from "../cookies"

export default function mobileNav() {

  return (
    <div className="fixed bottom-0 w-full bg-gray-700 text-white sm:hidden">
    <div className="container mx-auto flex justify-between">
      <a href="/" className="block py-4 px-3 ">Home</a>
      <a href="/add-products" className="block py-4 px-3">Add Product</a>
      <div className="flex py-4 px-3 ">
      <a href="/products" className="block hover:text-gray-200">View Products</a>        
      </div>

      <div className="flex items-center mr-2">
        <button onClick={() => deleteCookies()} className="inline-flex items-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white uppercase bg-blue-700  hover:bg-gray-600">
          Log out
        </button>
      </div>
    </div>
    </div>
  )
}
