import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Static from "../components/Static"
import AboutUS from "../components/AboutUs"
import KitchenSolution from "../components/KitchenSolution"
import CalculatorsSection from "../components/CalculatorsSection"
import Services from "../components/Services"
import Projects from "../components/Projects"
import Partners from "../components/Parteners"
import ClientsMarquee from "../components/ClientsMarquee"
import Insights from "../components/Insights"
import CTASection from "../components/CTASection"
import Footer from "../components/Footer"
import SlideToTop from "../components/SlideToTop"

const HomePage = () => {
  return (
    <>
    <Navbar/>
    <main>
      <Hero/>
      <Static/>
      <AboutUS/>
      <KitchenSolution/>
      <CalculatorsSection/>
      <Services/>
      <Projects/>
      <Partners/>
      <ClientsMarquee/>
      <Insights/>
      <CTASection/>
      <Footer/>
    <SlideToTop/>
    </main>
    </>
  )
}

export default HomePage