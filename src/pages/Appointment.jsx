import BookForm from "../components/BookForm"
import ServicesSection from "../components/ServicesSection"
import Footer from "../components/Footer"
import Header from "../components/Header"
import servicesHeaderImg from "../assets/page-header.jpg"

function Appointment() {
    return (
        <div className="w-full">
            <Header 
                title="Make an Appointment" 
                subtitle="Professional Grooming Services for the Modern Gentleman"
                image={servicesHeaderImg}
            />
            <ServicesSection />
            <BookForm />
            <Footer />
        </div>
    )
}

export default Appointment