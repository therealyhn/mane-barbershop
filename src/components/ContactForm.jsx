import contactImg from '../assets/book.jpg'

function ContactForm() {
    return (
        <div className="relative">
            <img src={contactImg} alt="Contact" className='w-full h-[80vh] object-cover' />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <form className="bg-transparent p-8 rounded-lg shadow-lg w-full max-w-2xl">
                    <h2 className="text-3xl font-bold text-white mb-6 text-center">Contact Us</h2>

                    <div className="mb-4">
                        <label htmlFor="name" className="block text-white text-sm font-bold mb-2">
                            Name
                        </label>
                        <input type="text" id="name" className="w-full px-3 py-2 border border-light-gray 
                        rounded focus:outline-none focus:border-prime" placeholder="Your Name" required />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-white text-sm font-bold mb-2">
                            Phone Number
                        </label>
                        <input type="tel" id="phone" className="w-full px-3 py-2 border border-light-gray rounded 
                        focus:outline-none focus:border-prime" placeholder="Your Phone Number" required />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="service" className="block text-white text-sm font-bold mb-2">
                            Service
                        </label>
                        <select id="service" className="w-full px-3 py-2 border border-light-gray rounded 
                        focus:outline-none focus:border-prime" required>
                            <option value="">Select a Service</option>
                            <option value="haircut">Haircut</option>
                            <option value="beard">Beard</option>
                            <option value="haircut-beard">Haircut & Beard</option>
                            <option value="eyebrows">Eyebrows</option>
                            <option value="design">Design</option>
                        </select>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="message" className="block text-white text-sm font-bold mb-2">
                            Message
                        </label>
                        <textarea id="message" className="w-full px-3 py-2 border border-light-gray rounded 
                        focus:outline-none focus:border-prime" rows="4" placeholder="Please let us know what time works best for you">
                        </textarea>
                    </div>

                    <button type="submit" className="w-full bg-prime text-white py-3 rounded
                     hover:bg-prime-dark transition-colors duration-300 uppercase">
                        Book Now
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm