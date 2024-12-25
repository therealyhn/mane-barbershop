import bookImg from '../assets/book.jpg';

function BookForm() {
    return (
        <div className="relative">
            <img src={bookImg} alt="Contact" className="w-full h-[120vh] md:h-[90vh] object-cover" />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center px-4 py-8 md:py-0">
                <div className="flex flex-col md:flex-row bg-transparent p-4 md:p-8 rounded-lg shadow-lg w-full max-w-7xl">
                    {/* Form Section */}
                    <div className="w-full md:w-2/5 md:pr-4">
                        <form className="bg-transparent">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Make an Appointment via Email</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label htmlFor="name" className="block text-white text-sm font-bold mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-3 py-2 border border-light-gray rounded focus:outline-none focus:border-prime"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-white text-sm font-bold mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full px-3 py-2 border border-light-gray rounded focus:outline-none focus:border-prime"
                                        placeholder="Your Phone Number"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="service" className="block text-white text-sm font-bold mb-2">
                                    Service
                                </label>
                                <select
                                    id="service"
                                    className="w-full px-3 py-2 border border-light-gray rounded focus:outline-none focus:border-prime"
                                    required
                                >
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
                                <textarea
                                    id="message"
                                    className="w-full px-3 py-2 border border-light-gray rounded focus:outline-none focus:border-prime"
                                    rows="4"
                                    placeholder="Please let us know what time works best for you"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-prime text-white py-3 rounded hover:bg-prime-dark transition-colors duration-300 uppercase"
                            >
                                Book Now
                            </button>
                        </form>
                    </div>

                    {/* OR Section */}
                    <div className="w-full md:w-1/5 flex flex-col items-center justify-center my-6 md:my-0">
                        <span className="text-3xl md:text-4xl font-bold text-white">OR</span>
                    </div>

                    {/* Instagram Section */}
                    <div className="w-full md:w-2/5 md:pl-4 flex flex-col items-center justify-center text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Connect on Instagram</h2>
                        <p className="text-white mb-4 text-sm md:text-base">Prefer to contact us directly? Reach out to us on Instagram!</p>
                        <a
                            href="https://www.instagram.com/manemuskifrizer/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full md:w-auto bg-prime text-white py-3 px-6 rounded hover:bg-prime-dark transition-colors duration-300 uppercase text-sm"
                        >
                            Visit Instagram
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookForm;
