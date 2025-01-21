import Carousel from "../components/Carousel"
import AboutSection from "../components/AboutSection"
import ServicesSection from "../components/ServicesSection"
import BookForm from "../components/BookForm"
import PriceSection from "../components/PriceSection"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useState, useEffect } from 'react'
import Loader from "../components/Loader"
import { Helmet } from 'react-helmet'

function Home() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        window.onload = () => {
            setLoading(false)
        }

        const timer = setTimeout(() => {
            setLoading(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    if (loading) {
        return <Loader />
    }
    return (
    <div className="w-full">
        <Helmet>
            <title>Dobrodošli - Mane&apos;s Barbershop</title>
        </Helmet>
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