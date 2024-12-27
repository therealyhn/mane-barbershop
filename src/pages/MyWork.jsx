import Footer from "../components/Footer"
import WorkGallery from "../components/WorkGallery"
import Header from "../components/Header"
import servicesHeaderImg from "../assets/page-header.jpg"

function MyWork() {
    return (
        <div className="w-full">
            <Header 
                title="My Work" 
                subtitle="Professional Grooming Services for the Modern Gentleman"
                image={servicesHeaderImg}
            />
            <WorkGallery />
            <Footer />
        </div>
    )
}

export default MyWork