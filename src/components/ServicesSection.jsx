import { useEffect, useRef, useState } from 'react'
import service1 from '../assets/service-1.jpg'
import service2 from '../assets/service-2.jpg'
import service3 from '../assets/service-3.jpg'
import mustach from '../assets/heading-line.png'
import 'animate.css'
import ServicesButton from './ServicesButton'

const ServicesSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
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

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div ref={sectionRef} className="w-full px-4 sm:px-6 md:px-8 lg:px-20 py-10 md:py-16 
            flex flex-col items-center justify-center bg-bgprime border-t-2 border-light-gray">
            
            {/* Header Section */}
            <div className="flex flex-col items-center justify-center mb-8 md:mb-16 w-full">
                <h2 className={`text-sm md:text-md font-semibold font-prata text-prime text-center mb-3 md:mb-4 ${
                    isVisible ? 'animate__animated animate__fadeInUp' : 'opacity-0'
                }`}>Experience Premium Grooming</h2>
                <div className="flex flex-col items-center justify-center gap-3 md:gap-4">
                    <span className={`text-2xl md:text-4xl font-semibold font-prata text-black text-center ${
                        isVisible ? 'animate__animated animate__fadeInUp animate__delay-1s' : 'opacity-0'
                    }`}>Our Barber Services</span>
                    <img src={mustach} alt="mustach" className={`w-32 md:w-50 ${
                        isVisible ? 'animate__animated animate__fadeInUp animate__delay-1s' : 'opacity-0'
                    }`} />
                </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 w-full max-w-6xl">
                {/* Service 1 */}
                <div className={`flex flex-col items-center px-4 ${
                    isVisible ? 'animate__animated animate__fadeInLeft animate__delay-2s' : 'opacity-0'
                }`}>
                    <img src={service1} alt="service1" className="w-48 md:w-2/3 h-48 md:h-auto object-cover rounded-full 
                        transition-all duration-300 hover:shadow-lg hover:grayscale" />
                    <h3 className="mt-4 text-lg md:text-xl font-semibold font-lato">Hair Services</h3>
                    <p className="text-second text-center text-sm md:text-base mt-2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, sunt!
                    </p>
                </div>

                {/* Service 2 */}
                <div className={`flex flex-col items-center px-4 ${
                    isVisible ? 'animate__animated animate__fadeInUp animate__delay-2s' : 'opacity-0'
                }`}>
                    <img src={service3} alt="service2" className="w-48 md:w-2/3 h-48 md:h-auto object-cover rounded-full 
                        transition-all duration-300 hover:shadow-lg hover:grayscale" />
                    <h3 className="mt-4 text-lg md:text-xl font-semibold font-lato">Beard Services</h3>
                    <p className="text-second text-center text-sm md:text-base mt-2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, sunt!
                    </p>
                </div>

                {/* Service 3 */}
                <div className={`flex flex-col items-center px-4 ${
                    isVisible ? 'animate__animated animate__fadeInRight animate__delay-2s' : 'opacity-0'
                }`}>
                    <img src={service2} alt="service3" className="w-48 md:w-2/3 h-48 md:h-auto object-cover rounded-full 
                        transition-all duration-300 hover:shadow-lg hover:grayscale" />
                    <h3 className="mt-4 text-lg md:text-xl font-semibold font-lato">Eyebrows & Design</h3>
                    <p className="text-second text-center text-sm md:text-base mt-2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, sunt!
                    </p>
                </div>
            </div>

            {/* Button Section */}
            <div className={`mt-8 md:mt-16 ${
                isVisible ? 'animate__animated animate__fadeInUp animate__delay-3s' : 'opacity-0'
            }`}>
                <ServicesButton />
            </div>
        </div>
    );
};

export default ServicesSection;