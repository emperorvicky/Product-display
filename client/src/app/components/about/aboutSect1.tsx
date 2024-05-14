import { jost, dmSerif } from '../home/sect1'

export default function AboutSect1() {



  return (

<div className="text-center ">
<div className=" lg:grid lg:grid-cols-5 block sm:flex mt-20 mx-4 bg-bgNitoo2 h-[96] rounded-md shadow-md">
<div className="slide-in-left sm:w-[20rem]  lg:ml-[10rem] xl:ml-[15rem] lg:mt-[2rem] lg:col-span-1">
<h1 className={`${dmSerif.className} uppercase pb-2`}>
ABOUT US
  </h1>
<div className="p-3">
<p className={`${jost.className} text-justify text-sm leading-6 tracking-wide`}>
       Welcome to NITOO, where innovation meets luxury in the world of bathroom fixtures. At NITOO, 
       we go beyond providing essential products; we curate experiences that redefine the art of 
       self-care and elevate the aesthetics of your living spaces
</p>
       
</div>

</div>
<div className="slide-in-right lg:col-span-4 text-center pb-2 sm:p-2  sm:ml-[2rem]">
<img src="/images/aboutUs.jpg" className="rounded-md w-[15rem] sm:w-[20rem] lg:w-[30rem] shadow-md mx-auto" /> 
</div>

</div>      
</div>
  )
}
