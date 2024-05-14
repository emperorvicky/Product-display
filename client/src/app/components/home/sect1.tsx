import {DM_Serif_Display, Jost} from "next/font/google"
import { FaBath } from "react-icons/fa6";
import { GiKitchenTap } from "react-icons/gi";
import { FaShower } from "react-icons/fa";


export const dmSerif = DM_Serif_Display({subsets:["latin"], weight:["400"]})
export const jost = Jost({subsets:["latin"], weight:["200"]})


export default function Sect1() {



  return (
    <div className="text-center ">
      <div className=" lg:grid lg:grid-cols-5 block sm:flex mt-20 mx-4 bg-white h-[96] rounded-md shadow-md">
     <div className="slide-in-left sm:w-[20rem]  lg:ml-[10rem] xl:ml-[15rem] lg:mt-[2rem] lg:col-span-1">
      <h1 className={`${dmSerif.className} uppercase pb-2`}>
      Elevate Your Space with Nitoo's Premier Sanitary Wares!
        </h1>
      <div className="p-3">
      <p className={`${jost.className} text-justify text-sm leading-6 tracking-wide`}>
      Transform your bathroom experience with Nitoo's exquisite range of sanitary wares. From stylish toilets to innovative urinals, our collection redefines elegance and functionality, ensuring a seamless blend of form and utility in every piece.
      </p>
      <div className="flex justify-center space-x-5 sm:space-x-10 pt-5">
              <div className="bg-gray-200 shadow-md px-3 py-3 rounded-md" >
              <FaBath size={30}  color="blue"/>
              </div>
              <div className="bg-gray-200 shadow-md px-3 py-3 rounded-md" >
              <GiKitchenTap size={30}  color="blue" />
              </div>
              <div className="bg-gray-200 shadow-md px-3 py-3 rounded-md" >
              <FaShower size={30}  color="blue" />
              </div>
            </div>        
      </div>

     </div>
     <div className="slide-in-right lg:col-span-4 text-center pb-2 sm:p-2  sm:ml-[2rem]">
     <img src="/hImages/img1.jpg" className="rounded-md w-[15rem] sm:w-[20rem] lg:w-[30rem] shadow-md mx-auto" /> 
     </div>
     
      </div>      
    </div>

  )
}
