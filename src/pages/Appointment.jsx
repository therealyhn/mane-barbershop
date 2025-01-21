import BookForm from "../components/BookForm"
import Footer from "../components/Footer"
import ServicesSection from "../components/ServicesSection"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import PriceSection from "../components/PriceSection"
import servicesHeaderImg from "../assets/page-header.jpg"
import { useState, useEffect } from 'react'
import Loader from "../components/Loader"
import { Helmet } from 'react-helmet'

function Appointment() {
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
            <Helmet>
                <title>Zakazivanje - Mane&apos;s Barbershop</title>
            </Helmet>
            <Navbar />
            <Header 
                title="Zakazivanje" 
                subtitle="Profesionalne usluge nege za modernog džentlmena"
                image={servicesHeaderImg}
            />
            <PriceSection />
            <BookForm />
            <ServicesSection />
            <Footer />
        </div>
    )
}

export default Appointment