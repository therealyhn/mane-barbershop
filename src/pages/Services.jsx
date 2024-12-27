import { useState, useEffect } from 'react'
import Navbar from "../components/Navbar"
import AllServices from "../components/AllServices"
import PriceSection from "../components/PriceSection"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Loader from "../components/Loader"
import servicesHeaderImg from "../assets/page-header.jpg"

function Services() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Simulate loading or wait for actual content
        window.onload = () => {
            setLoading(false)
        }

        // Fallback in case window.onload doesn't trigger
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2000) // Adjust timeout as needed

        return () => clearTimeout(timer)
    }, [])

    if (loading) {
        return <Loader />
    }

    return (
        <div className="w-full">
            <Navbar />
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