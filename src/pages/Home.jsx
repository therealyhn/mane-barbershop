import Carousel from "../components/Carousel"
import AboutSection from "../components/AboutSection"
import ServicesSection from "../components/ServicesSection"
import BookForm from "../components/BookForm"
import PriceSection from "../components/PriceSection"
import Footer from "../components/Footer"

function Home() {
    return (
    <div className="w-full">
        <Carousel />
        <AboutSection />
        <ServicesSection />
        <BookForm />
        <PriceSection />
        <Footer />
    </div>
    )
  }
  
  export default Home