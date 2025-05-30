import Footer from "../components/Footer"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import AboutSection from "../components/AboutSection"
import AboutProfile from "../components/AboutProfile"
import servicesHeaderImg from "../assets/page-header.jpg"
import { useState, useEffect } from 'react'
import Loader from "../components/Loader"
import { Helmet } from 'react-helmet';

function About() {
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
                <title>O meni - Mane&apos;s Barbershop</title>
            </Helmet>
            <Navbar />
            <Header 
                title="O meni" 
                subtitle="Profesionalne usluge nege za modernog džentlmena"
                image={servicesHeaderImg}
            />
            <AboutSection />
            <AboutProfile />
            <Footer />
        </div>
    )
}

export default About