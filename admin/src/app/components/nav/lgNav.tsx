'use client'
import { deleteCookies } from "../cookies"
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
          <a href="/add-products" className="inline-flex items-center px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300">
          Add Products
          </a>
          <a href="/products" className="inline-flex items-center px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300">
            View Products
          </a>
        </div>
      </div>


      <div onClick={() => deleteCookies()}  className="hidden sm:flex sm:items-center sm:ml-6">
        <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-blue-700 uppercase hover:bg-gray-600">
          Log out
        </button>
      </div>



    </div>
  </div>
</nav>

    </header>
  )
}