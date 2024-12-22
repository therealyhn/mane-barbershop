import { Link } from 'react-router-dom'
import BookButton from './BookButton'
function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full shadow-md z-50 bg-prime-dark">
            <div className="flex justify-evenly items-center p-4">
                <div>
                    <img src="/src/assets/logo-text.png" alt="logo" className="w-20" />
                </div>
                <div className="flex items-center gap-8">
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
            </div>
        </nav>
    )
}

export default Navbar