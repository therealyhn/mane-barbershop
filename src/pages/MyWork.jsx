import Footer from "../components/Footer"
import WorkGallery from "../components/WorkGallery"
import Header from "../components/Header"
import servicesHeaderImg from "../assets/page-header.jpg"
import Navbar from "../components/Navbar"
import Loader from "../components/Loader"
import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet';

function MyWork() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Simulate loading or wait for actual content
        window.onload = () => {
            setLoading(false)
        }

        // Fallback in case window.onload doesn't trigger
        const timer = setTimeout(() => {
            setLoading(false)
        }, 3000)

        return () => clearTimeout(timer)
    }, [])

    if (loading) {
        return <Loader />
    }
    return (
        <div className="w-full">
            <Helmet>
                <title>Moji Radovi - Mane&apos;s Barbershop</title>
            </Helmet>
            <Navbar />
            <Header
                title="Moji Radovi"
                subtitle="Profesionalne usluge nege za modernog džentlmena"
                image={servicesHeaderImg}
            />
            <WorkGallery />
            <Footer />
        </div>
    )
}

export default MyWork