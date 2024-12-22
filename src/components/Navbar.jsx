import { Link } from 'react-router-dom'
import { useState } from 'react'
import BookButton from './BookButton'
import logo from '../assets/logo-text.png';
import 'animate.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 w-full shadow-md z-50 bg-prime-dark">
            <div className="flex justify-between items-center p-4 lg:justify-evenly">
                <div>
                    <img src={logo} alt="logo" className="w-20" />
                </div>
                
                <button 
                    className="lg:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                <div className="hidden lg:flex items-center gap-8">
                    <ul className="flex gap-8 uppercase">
                        <li><Link to="/" className="text-light-gray hover:text-white
                         transition-all duration-300 text-sm font-bold">Home</Link></li>
                        <li><Link to="/services" className="text-light-gray hover:text-white
                         transition-all duration-300 text-sm font-bold">Services</Link></li>
                        <li><Link to="/gallery" className="text-light-gray hover:text-white
                         transition-all duration-300 text-sm font-bold">Gallery</Link></li>
                        <li><Link to="/contact" className="text-light-gray hover:text-white
                         transition-all duration-300 text-sm font-bold">Contact</Link></li>
                    </ul>
                    <BookButton />
                </div>

                <div 
                    className={`lg:hidden absolute top-full left-0 w-full bg-prime-dark shadow-md ${
                        isMenuOpen 
                            ? 'animate__animated animate__fadeInDown' 
                            : 'animate__animated animate__fadeOutUp'
                    } ${!isMenuOpen && 'hidden'}`}
                >
                    <ul className="flex flex-col items-center py-4">
                        <li className="py-2"><Link to="/" className="text-light-gray hover:text-white transition-all duration-300 text-sm font-bold">Home</Link></li>
                        <li className="py-2"><Link to="/services" className="text-light-gray hover:text-white transition-all duration-300 text-sm font-bold">Services</Link></li>
                        <li className="py-2"><Link to="/gallery" className="text-light-gray hover:text-white transition-all duration-300 text-sm font-bold">Gallery</Link></li>
                        <li className="py-2"><Link to="/contact" className="text-light-gray hover:text-white transition-all duration-300 text-sm font-bold">Contact</Link></li>
                        <li className="py-2"><BookButton /></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar