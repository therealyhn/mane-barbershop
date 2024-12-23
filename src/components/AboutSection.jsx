import { useEffect, useRef, useState } from 'react'
import logo from '../assets/logo-full-text.png'
import about1 from '../assets/about-1.jpg'
import about2 from '../assets/about-2.jpg'
import about3 from '../assets/about-3.jpg'
import AboutButton from './AboutButton'
import 'animate.css'

function AboutSection() {
    // State - if section visible in viewport
    const [isVisible, setIsVisible] = useState(false);
    // Reference to the section element for intersection observer
    const sectionRef = useRef(null);

    useEffect(() => {
        // Create intersection observer instance
        const observer = new IntersectionObserver(
            ([entry]) => {
                // When section enters viewport
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Stop observing once animation is triggered
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.4
            }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        // Cleanup observer on component unmount
        return () => {
            if (currentRef) { 
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        // Add ref to the main container for intersection observer
        <div ref={sectionRef} className="flex flex-col md:flex-row items-center justify-between gap-20 
         px-6 md:px-20 py-12 bg-light-gray">
            {/* Left Side */}
            <div className="flex flex-col items-center text-center md:w-1/2">

                <h2 className={`text-xl text-prime-dark ${isVisible ? 'animate__animated animate__fadeInUp' : 'opacity-0'}`}>
                    Introducing
                </h2>

                <h1 className={`text-4xl font-bold text-prime mt-4 ${isVisible ? 'animate__animated animate__fadeInUp animate__delay-1s' : 'opacity-0'}`}>
                    Mane&apos;s Barbershop
                </h1>

                <h3 className={`text-xl text-second ${isVisible ? 'animate__animated animate__fadeInUp animate__delay-1s' : 'opacity-0'}`}>
                    Science 2023
                </h3>

                <div className={`my-8 ${isVisible ? 'animate__animated animate__fadeIn animate__delay-1s' : 'opacity-0'}`}>
                    <img src={logo} alt="logo" className="w-[250px]" />
                </div>

                <p className={`text-gray-600 text-base leading-relaxed max-w-xl text-center ${isVisible ? 'animate__animated animate__fadeInUp animate__delay-1s' : 'opacity-0'}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className={`mt-10 ${isVisible ? 'animate__animated animate__fadeInUp animate__delay-1s' : 'opacity-0'}`}>
                    <AboutButton />
                </div>
            </div>

            {/* Right Side - Images Stack */}
            <div className="hidden md:block relative md:w-1/2 h-[500px]">
                <img
                    src={about1}
                    alt="Barber 1"
                    className={`absolute top-0 right-[50%] w-72 h-60 object-cover rounded-lg shadow-xl
                    ${isVisible ? 'animate__animated animate__fadeInDown' : 'opacity-0'}`}
                />
                <img
                    src={about2}
                    alt="Barber 2"
                    className={`absolute top-10 right-[10%] w-80 h-80 object-cover rounded-lg shadow-xl
                    ${isVisible ? 'animate__animated animate__fadeInRight animate__delay-1s' : 'opacity-0'}`}
                />
                <img
                    src={about3}
                    alt="Barber 3"
                    className={`absolute top-40 right-[40%] w-72 h-72 object-cover rounded-lg shadow-xl
                    ${isVisible ? 'animate__animated animate__fadeInLeft animate__delay-2s' : 'opacity-0'}`}
                />
            </div>
        </div>
    )
}

export default AboutSection