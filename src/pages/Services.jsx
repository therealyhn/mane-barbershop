import { useState, useEffect } from 'react'
import Navbar from "../components/Navbar"
import AllServices from "../components/AllServices"
import PriceSection from "../components/PriceSection"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Loader from "../components/Loader"
import servicesHeaderImg from "../assets/page-header.jpg"
import { Helmet } from 'react-helmet';

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
            <Helmet>
                <title>Usluge - Mane&apos;s Barbershop</title>
            </Helmet>
            <Navbar />
            <Header 
                title="Usluge" 
                subtitle="Profesionalne usluge nege za modernog džentlmena"
                image={servicesHeaderImg}
            />
            <AllServices />
            <PriceSection />
            <Footer />
        </div>
    )
}

export default Services