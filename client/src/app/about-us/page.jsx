import LgNav from "../components/header/lgNav";
import MobileNav from "../components/header/mobileNav"
import Footer from "../components/footer/footer";
import {Archivo_Narrow, Roboto} from "next/font/google"
import AboutSect1 from "../components/about/aboutSect1"
import AboutSect2 from "../components/about/aboutSect2"

const Archivo = Archivo_Narrow({ subsets:["latin-ext"]})
const roboto = Roboto({subsets:["greek"], weight:'300'})

export default function Aboutus() {

  const backgroundImage = 'url("/cover/coverPage.png")'

  const divStyle = {
    backgroundImage: backgroundImage,
    backgroundRepeat: 'repeat', 
    color: 'white',
    backgroundPosition: '25% 0%',
    textAlign: 'center',
    padding: '20px',
    marginBottom: '5rem',
};
  return (
    <main>
        <LgNav/>
        <AboutSect1/>
        <AboutSect2/>
        <Footer/>
        <MobileNav/>
    </main>
  )
}
