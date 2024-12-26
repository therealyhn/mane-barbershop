import Footer from "../components/Footer"
import Header from "../components/Header"
import AboutSection from "../components/AboutSection"
import AboutProfile from "../components/AboutProfile"
import servicesHeaderImg from "../assets/page-header.jpg"

function About() {
    return (
        <div className="w-full">
            <Header 
                title="About Me" 
                subtitle="Professional Grooming Services for the Modern Gentleman"
                image={servicesHeaderImg}
            />
            <AboutSection />
            <AboutProfile />
            <Footer />
        </div>
    )
}

export default About