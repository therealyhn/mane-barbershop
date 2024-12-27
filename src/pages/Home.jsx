import Carousel from "../components/Carousel"
import AboutSection from "../components/AboutSection"
import ServicesSection from "../components/ServicesSection"
import BookForm from "../components/BookForm"
import PriceSection from "../components/PriceSection"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useState, useEffect } from 'react'
import Loader from "../components/Loader"


function Home() {
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