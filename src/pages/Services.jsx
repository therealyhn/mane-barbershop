import AllServices from "../components/AllServices"
import PriceSection from "../components/PriceSection"
import Footer from "../components/Footer"
import Header from "../components/Header"
import servicesHeaderImg from "../assets/page-header.jpg"

function Services() {
    return (
        <div className="w-full">
            <Header 
                title="Our Services" 
                subtitle="Professional Grooming Services for the Modern Gentleman"
                image={servicesHeaderImg}
            />
            <AllServices />
            <PriceSection />
            <Footer />
        </div>
    )
}

export default Services