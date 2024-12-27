import Footer from "../components/Footer"
import WorkGallery from "../components/WorkGallery"
import Header from "../components/Header"
import servicesHeaderImg from "../assets/page-header.jpg"
import Navbar from "../components/Navbar"
import Loader from "../components/Loader"
import { useState, useEffect } from 'react'

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