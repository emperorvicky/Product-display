import { jost, dmSerif } from '../home/sect1'

export default function aboutSect2() {
  return (
    <div className=" my-[4rem] container mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 bg-center bg-bgNitoo2">
        <div className='bg-white m-2  rounded-md shadow-md'>
        <h1 className={`${dmSerif.className} uppercase text-center py-2`}>Our Vision</h1>
        <p className={`${jost.className} text-justify text-sm leading-6 tracking-wide mx-3 lg:mx-[3rem]`}>
        At the heart of our vision is the belief that every home deserves a touch of sophistication and comfort.
            We envision bathrooms not just as functional spaces but as sanctuaries where individuals rejuvenate and
            find moments of solace. Through our carefully selected collection of toilets, showers, and urinals,
            we aim to transform your bathroom into a haven of elegance and modernity.
        </p>
        </div>

        <div className='bg-white m-2 rounded-md shadow-md'>
        <h1 className={`${dmSerif.className} uppercase py-2 text-center`}>Unrivaled Quality</h1>
        <p className={`${jost.className} text-justify text-sm leading-6 tracking-wide mx-3 lg:mx-[3rem]`}>
        Quality is the cornerstone of our commitment to excellence. 
            Our products are meticulously crafted with precision and care, 
            ensuring unparalleled durability and functionality. From cutting-edge 
            designs to timeless classics, each item in our catalog is a testament 
            to our dedication to providing the best for your home.
        </p>
        </div>
        <div className='bg-white m-2 rounded-md shadow-md'>
        <h1 className={`${dmSerif.className} uppercase py-2 text-center`}>Sustainable Solutions</h1>
        <p className={`${jost.className} text-justify text-sm leading-6 tracking-wide mx-3 lg:mx-[3rem]`}>
          We take pride in offering not just stylish fixtures but also solutions that contribute to a sustainable future.
          Our commitment to eco-friendly practices is reflected in our product designs, utilizing innovative technologies
          that minimize environmental impact. Elevate your home with products that align with your values.
        </p>

        </div>
        <div className='bg-white m-2 rounded-md shadow-md'>
        <h1 className={`${dmSerif.className} uppercase py-2 text-center`}>Customer-Centric Approach</h1>
        <p className={`${jost.className} text-justify text-sm leading-6 tracking-wide mx-3 lg:mx-[3rem]`}>
        Our journey is not just about selling products; it's about building lasting relationships with our customers.
            We understand the importance of trust in any transaction, and that's why we prioritize customer satisfaction.
            From the selection process to the delivery of your chosen fixtures, we ensure a seamless and delightful experience.
        </p>
        
        </div>
        <div className='bg-white m-2 rounded-md shadow-md'>
        <h1 className={`${dmSerif.className} uppercase py-2 text-center`}>The NITOO Experience</h1>
        <p className={`${jost.className} text-justify text-sm leading-6 tracking-wide mx-3 lg:mx-[3rem]`}>
        Discover the NITOO experience — where luxury meets functionality, and where your vision for an ideal bathroom becomes a reality. 
            Explore our catalog,immerse yourself in the world of exquisite designs, and embark on a journey toward a more refined lifestyle.
        </p>
        
        </div>
        <div className='bg-white m-2 rounded-md shadow-md'>
        <h1 className={`${dmSerif.className} uppercase py-2 text-center`}>Contact Us</h1>
        <p className={`${jost.className} text-justify text-sm leading-6 tracking-wide mx-3 lg:mx-[3rem]`}>
        Have questions or need assistance? Our team is here to help. Reach out to us, and let's collaborate to create the bathroom of your dreams.

Elevate your home with NITOO — where style meets substance.

        </p>

        </div>
          </div>

  )
}
