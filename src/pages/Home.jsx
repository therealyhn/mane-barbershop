import Carousel from "../components/Carousel"
import AboutSection from "../components/AboutSection"
import ServicesSection from "../components/ServicesSection"
import ContactForm from "../components/ContactForm"
import PriceSection from "../components/PriceSection"
import Footer from "../components/Footer"

function Home() {
    return (
    <div className="w-full">
        <Carousel />
        <AboutSection />
        <ServicesSection />
        <ContactForm />
        <PriceSection />
        <Footer />
    </div>
    )
  }
  
  export default Home