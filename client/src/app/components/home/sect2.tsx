"use client"
import { jost } from './sect1'

export default function Sect2() {
  return (
    <div className='scale-in-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 rounded-md mx-4 mt-4 bg-gray-100 mb-[10rem]'>
        <div className='text-center block bg-white rounded-md shadow-md mx-[2rem] my-2'>
        <img src="/hImages/img2.jpg" className='rounded-md w-[18rem] sm:h-[19rem]  mx-auto mt-1'/>
        <div className='p-3'>
        <p className={`${jost.className} text-center text`}>
        Elevate your everyday routine with Nitoo's premium collection of bathroom fixtures that seamlessly blend form and function
        </p>            
        </div>

        </div>
        <div className='text-center block bg-white rounded-md shadow-md mx-[2rem] my-2'>
        <img src="/hImages/img3.jpg" className='rounded-md w-[18rem] sm:h-[19rem] mx-auto mt-1 '/>
        <div className='p-3'>
        <p className={`${jost.className} text-center text`}>
        Discover the perfect harmony of style and utility with Nitoo's innovative sanitary wares. Start enhancing your space today!
        </p>            
        </div>
    
        </div>
        <div className='text-center block bg-white rounded-md shadow-md mx-[2rem] my-2'>
        <img src="/hImages/img4.jpg" className='rounded-md w-[18rem] sm:h-[19rem] mx-auto mt-1'/>
        <div className='p-3'>
        <p className={`${jost.className} text-center`}>
        Welcome to Nitoo - Where elegance meets efficiency in every bathroom fixture we offer.
        </p>            
        </div>

        </div>
    </div>
  )
}
