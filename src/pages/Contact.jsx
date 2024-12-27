import Map from "../components/Map"
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useState, useEffect } from 'react'
import Loader from "../components/Loader"


function Contact() {
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
            <Map />
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Contact