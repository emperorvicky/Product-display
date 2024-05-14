import LgNav from "../components/header/lgNav";
import MobileNav from "../components/header/mobileNav"
import Footer from "../components/footer/footer"
import Section from "../components/product/Section"

export default function page() {
  return (
    <main>
        <LgNav/>
        <Section/>
        <MobileNav/>
        <Footer/>
    </main>
  )
}
