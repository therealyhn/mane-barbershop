function ContactForm() {
    return (
        <div className="w-full bg-bgprime">
            <div className="flex flex-col lg:flex-row gap-20 w-full py-20 px-4 max-w-7xl mx-auto">
                {/* Left side */}
                <div className="flex-1 space-y-8">
                    <div>
                        <h2 className="text-4xl font-bold mb-4">Get in touch with us & <br />send us message today!</h2>
                        <p className="text-second">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio maxime voluptates facere. Architecto, maiores molestiae!</p>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <h3 className="text-xl mb-1">Prvog Maja, 35</h3>
                            <p className="text-xl">Smederevo, Serbia</p>
                        </div>

                        <div>
                            <p className="text-second-dark">Email: manebarbershop@gmail.com</p>
                            <p className="text-second-dark">Phone: +381 12 345 6789</p>
                        </div>
                    </div>
                </div>

                {/* Right side */}
                <div className="flex-1">
                    <form className="space-y-6 bg-white p-10 rounded-sm shadow-md">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-prime"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-prime"
                                required
                            />
                        </div>

                        <textarea
                            placeholder="Message"
                            className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-prime h-40"
                            required
                        ></textarea>

                        <button
                            type="submit"
                            className="bg-prime text-white px-8 py-3 rounded hover:bg-prime/90 transition-all duration-300 uppercase text-sm"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm