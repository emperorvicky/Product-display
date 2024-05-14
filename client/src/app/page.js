'use client'
import { useState, useRef, useEffect } from "react";
import Footer from "./components/footer/footer";
import {Archivo_Narrow, Roboto} from "next/font/google";
import Sect1 from "./components/home/sect1"
import LgNav from "./components/header/lgNav";
import Sect2 from "./components/home/sect2"
import MobieNav from "./components/header/mobileNav"
import { jost, dmSerif } from './components/home/sect1'

const Archivo = Archivo_Narrow({ subsets:["latin-ext"]})
const roboto = Roboto({subsets:["greek"], weight:'300'})

export default function Home() {

  const [isVisible, setIsVisible] = useState(false);
  const [welcome, setWelcome] = useState(false);
  const sectionRef = useRef(null);
  const welcomeRef = useRef(null);

  const backgroundImage = 'url("/cover/coverPage.png")'

    const divStyle = {
      backgroundImage: backgroundImage,
      backgroundRepeat: 'repeat', 
      color: 'white',
      backgroundPosition: '25% 0%',
      textAlign: 'center',
      // padding: '20px',      
      
  };

  useEffect(() => {
    const handleScroll = () => {
      if (welcomeRef.current) {
        const { top } = welcomeRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        setWelcome(top < windowHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        setIsVisible(top < windowHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main>
      <LgNav />

      <Sect1/>
      <Sect2/>
   
      <div ref={sectionRef} style={divStyle} className={`rounded-md mt-[2rem] ${isVisible ? 'slide-in-left' : ''} sm:mt-[5rem] mx-4`}>
      <div className="container" >
          <div  className={`mb-4 pb-4 `}>
          <h2 className={`${dmSerif.className} homeHeading`}>Shop with Confidence</h2>
          <div className="textContainer">
          <p className={`${jost.className} text`}>
          Browse our extensive catalog and shop with confidence, knowing that you're investing in top-notch quality and style. With our dedication to customer satisfaction, we guarantee a seamless shopping experience from selection to delivery.
          </p>
          <p className={`${jost.className} mt-4 text`}>
          Elevate your bathroom experience with NITOO. Your home deserves the best, and we're here to provide it.
          </p>
          </div>
          <div className="space-x-2">
            <a href="/products" className="px-1 py-1 sm:px-2 sm:py-2 bg-yellow-300 hover:bg-yellow-200 rounded-md  text-white uppercase">Shop now</a>
            <a href="#footer" className="px-1 py-1 sm:px-2 sm:py-2 bg-green-300 hover:bg-green-200 rounded-md text-white uppercase">Contact us</a>
          </div>
          </div>
      </div>
      </div>


      <Footer />
      <MobieNav/>
    </main>
  );
}



{/* <div className="flex flex-wrap justify-center">
<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 py-3 px-3">
  <img
    src="/hImages/img1.jpg"
    alt="Image 1"
    className="w-full object-cover rounded-md"
  />
</div>
<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 py-3 px-3">
  <img
    src="/hImages/img2.jpg"
    alt="Image 2"
    className="w-full object-cover rounded-md"
  />
</div>
<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 py-3 px-3">
  <img
    src="/hImages/img3.jpg"
    alt="Image 3"
    className="w-full object-cover rounded-md"
  />
</div>
</div> */}
// At NITOO, we believe that the bathroom is more than just a functional space; it's a sanctuary of comfort and style. 
{/* <div className=" mt-[6rem] w-full self  sm:mt-[10rem]  bg-white shadow-md rounded-md py-16" style={divStyle}>
<div className="container mx-auto text-center" >

  <div className="mb-4">
  <h1 className={`${Archivo.className} homeHeading`}>Welcome to NITOO</h1>
  <div className="textContainer">
    <p className={`${roboto.className} text`}>
Elevate your everyday routine with our premium collection of bathroom fixtures that seamlessly blend form and function.
    </p>
  </div>            
  </div>

  <div className="mb-4">
  <h2 className={`${Archivo.className} homeHeading`}>Unmatched Quality for Your Comfort</h2>
  <div className="textContainer">
  <p className={`${roboto.className} text`}>
  Discover a new level of comfort and sophistication with our meticulously 
  crafted toilets, showers, and urinals. Each product in our collection is 
  designed with your comfort in mind, offering unparalleled functionality and lasting durability. Our commitment to quality ensures that every visit to your bathroom becomes an indulgent experience.
  </p>
  </div>
  </div>
  <div className="mb-4">
  <h2 className={`${Archivo.className} homeHeading`}>Stylish Elegance for Every Home</h2>
  <div className="textContainer">
  <p className={`${roboto.className} text`}>
  Transform your bathroom into a statement of style with our diverse range of fixtures. 
  From modern and sleek designs to timeless classics, our collection caters to various tastes and preferences. 
  Choose from an array of finishes, materials, and shapes to match your unique aesthetic, ensuring that your bathroom reflects your personal style.
  </p>
  </div>
  </div>
  <div className="mb-4">
  <h2 className={`${Archivo.className} homeHeading`}>Innovation that Matters</h2>
  <div className="textContainer">
  <p className={`${roboto.className} text`}>
  Stay ahead of the curve with our innovative and technologically advanced bathroom solutions.
  Our products feature cutting-edge designs, eco-friendly features, and smart functionalities, 
  enhancing the efficiency and sustainability of your home. Experience the convenience of modern 
  living with NITOO.
  </p>
  </div>
  </div>

  <div className="mb-4">
  <h2 className={`${Archivo.className} homeHeading`}>Your Home, Your Sanctuary</h2>
  <div className="textContainer">
  <p className={`${roboto.className} text`}>
  At NITOO, we understand the importance of creating a home that resonates with your lifestyle. 
  Let our bathroom fixtures add a touch of luxury to your living space. Whether you're remodeling 
  or upgrading, our collection promises to elevate your home to new heights of comfort and elegance.
  </p>
  </div>
  </div>

  <div className="mb-4">
  <h2 className={`${Archivo.className} homeHeading`}>Shop with Confidence</h2>
  <div className="textContainer">
  <p className={`${roboto.className} text`}>
  Browse our extensive catalog and shop with confidence, knowing that you're investing in top-notch quality and style. With our dedication to customer satisfaction, we guarantee a seamless shopping experience from selection to delivery.
  </p>
  <p className={`${roboto.className} mt-4 text`}>
  Elevate your bathroom experience with NITOO. Your home deserves the best, and we're here to provide it.
  </p>
  </div>
  <div className="space-x-2">
    <a href="/products" className="px-1 py-1 sm:px-2 sm:py-2 bg-yellow-300 hover:bg-yellow-200 rounded-md  text-white uppercase">Shop now</a>
    <a href="#footer" className="px-1 py-1 sm:px-2 sm:py-2 bg-green-300 hover:bg-green-200 rounded-md text-white uppercase">Contact us</a>
  </div>
  </div>


</div>
</div>         */}