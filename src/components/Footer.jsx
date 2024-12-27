import logo from '../assets/logo.png'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'

function Footer() {
    return (
        <div className="w-full bg-prime-dark text-white py-12 px-4 sm:px-6 md:px-8 lg:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo and Description */}
                <div className="flex flex-col items-center md:items-start gap-4">
                    <img src={logo} alt="logo" className="w-72 mx-auto" />
                </div>

                {/* Contact Information */}
                <div className="flex flex-col items-center md:items-start gap-4">
                    <h3 className="text-xl font-semibold mb-2 text-prime text-center md:text-left">Contact Us</h3>
                    <div className="flex flex-col gap-2 space-y-4 text-center md:text-left">
                        <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                        <p className="text-sm">manebarbershop@gmail.com</p>
                        <p className="text-sm">+381 64 123 4567</p>
                    </div>
                </div>

                {/* Opening Hours */}
                <div className="flex flex-col items-center md:items-start gap-4">
                    <h3 className="text-xl font-semibold mb-2 text-prime text-center md:text-left">Opening Hours</h3>
                    <div className="flex flex-col gap-2 space-y-4 text-center md:text-left">
                        <p className="text-sm">Monday - Saturday: 9:00 - 21:00</p>
                        <p className="text-sm">Sunday: Closed</p>
                        <p className="text-sm">Holidays: Closed</p>
                    </div>
                </div>
            </div>
            
            <div className="flex gap-4 justify-center mt-8">
                <div className="flex gap-2 cursor-pointer hover:text-prime transition-colors"
                    onClick={() => window.open('https://www.instagram.com/manemuskifrizer/', '_blank')}>
                    <img src={instagram} alt="instagram" className="w-6 h-6" />
                    <span className="text-sm">/manemuskifrizer</span>
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:text-prime transition-colors">
                    <img src={facebook} alt="facebook" className="w-6 h-6" />
                    <span className="text-sm">/manebarbershop</span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-700 grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left">
                <p className="text-sm text-light-gray">
                    © 2023 Mane Barbershop. All rights reserved.
                </p>
                <p className="text-sm text-light-gray text-center md:text-right">
                    Designed by <a href="https://jovanljusic.com" target="_blank" rel="noopener noreferrer"
                        className="hover:text-third text-prime underline transition-colors">Jovan Ljusic</a>
                </p>
            </div>
        </div>
    )
}

export default Footer