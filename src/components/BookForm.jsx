import bookImg from '../assets/book.jpg';
import { useState } from 'react';

function BookForm() {
    const [result, setResult] = useState("");
    const [selectedServices, setSelectedServices] = useState([]);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const services = {
        klasik: { price: 700, time: 30 },
        fade: { price: 800, time: 30 },
        nularica: { price: 400, time: 15 },
        brada: { price: 300, time: 15 },
        obrve: { price: 200, time: 10 },
        dizajn: { price: 200, time: 10 }
        // 'pranje kose': { price: 200, time: 5 }
    };

    const handleServiceChange = (event) => {
        const { value, checked } = event.target;

        if (checked) {
            setSelectedServices((prev) => [...prev, value]);
        } else {
            setSelectedServices((prev) => prev.filter((service) => service !== value));
        }
    };

    const calculateTotalPrice = () => {
        return selectedServices.reduce((total, service) => total + services[service].price, 0);
    };

    const calculateTotalTime = () => {
        return selectedServices.reduce((total, service) => total + services[service].time, 0);
    };

    // web3forms API
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
    
        const formData = new FormData(event.target);
    
        formData.append("access_key", "3df84bb9-73e9-46d2-a33c-88a0b158ba26");
        formData.append("name", event.target.name.value); 
        formData.append("phone", event.target.phone.value);
        formData.append("services", selectedServices.join(", "));
    
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });
    
            const data = await response.json();
    
            if (data.success) {
                setShowConfirmation(true);
                setResult(""); // Clear result message
                event.target.reset(); // Resetuj formu
            } else {
                console.log("Error", data);
                setResult(data.message);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setResult("Došlo je do greške pri slanju forme.");
        }
    };
    

    const handleCloseConfirmation = () => {
        setShowConfirmation(false);
    };

    return (
        <div className="relative">
            <img src={bookImg} alt="Contact" className="w-full h-[120vh] md:h-[90vh] object-cover" />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center px-4 py-8 md:py-0">
                <div className="flex flex-col md:flex-row bg-transparent p-4 md:p-8 rounded-lg shadow-lg w-full max-w-7xl">
                    {/* Form Section */}
                    <div className="w-full md:w-2/5 md:pr-4">
                        <form className="bg-transparent" onSubmit={onSubmit}>
                            <h2 className="text-xl md:text-3xl font-bold text-white md:mb-6 my-2 text-center">Zakažite termin putem Emaila</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label htmlFor="name" className="block text-white text-sm font-bold mb-1">
                                        Ime
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-3 py-2 border border-light-gray rounded focus:outline-none focus:border-prime text-sm"
                                        placeholder="Vaše ime"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-white text-sm font-bold mb-1">
                                        Broj Telefona
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="w-full px-3 py-2 border border-light-gray rounded focus:outline-none focus:border-prime text-sm"
                                        placeholder="Vaš broj telefona"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block text-white text-sm font-bold mb-2">
                                    Usluge
                                </label>
                                <div className="grid grid-cols-2 gap-2">
                                    {Object.keys(services).map((service) => (
                                        <div key={service} className="flex items-center">
                                            <input
                                                type="checkbox"
                                                value={service}
                                                onChange={handleServiceChange}
                                                className="hidden peer"
                                                id={service}
                                            />
                                            <label
                                                htmlFor={service}
                                                className="peer-checked:bg-third peer-checked:text-black peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-prime 
                                            transition-all flex items-center justify-center w-full py-2 px-4 bg-transparent
                                            border border-light-gray rounded hover:bg-prime hover:text-white cursor-pointer uppercase text-sm text-white"
                                            >
                                                {service.charAt(0).toUpperCase() + service.slice(1).replace("-", " & ")}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="date" className="block text-white text-sm font-bold mb-2">
                                    Datum
                                </label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    className="w-full px-3 py-2 border border-light-gray rounded focus:outline-none focus:border-prime text-sm"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="time" className="block text-white text-sm font-bold mb-2">
                                    Vreme
                                </label>
                                <input
                                    type="time"
                                    id="time"
                                    name="time"
                                    className="w-full px-3 py-2 border border-light-gray rounded focus:outline-none focus:border-prime text-sm"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-prime text-white py-2 rounded uppercase hover:bg-prime-dark transition-colors duration-300 text-sm font-prata"
                            >
                                Zakaži Termin
                            </button>
                        </form>
                        <span className="text-white text-sm mt-2">{result}</span>
                    </div>

                    {/* OR Section */}
                    <div className="w-full md:w-1/5 flex flex-col items-center justify-center my-6 md:my-0">
                        <span className="text-2xl md:text-4xl font-bold text-white">ILI</span>
                    </div>

                    {/* Instagram Section */}
                    <div className="w-full md:w-2/5 md:pl-4 flex flex-col items-center justify-center text-center">
                        <h2 className="text-xl md:text-3xl font-bold text-white mb-4">Instagram Profil</h2>
                        <p className="text-white mb-4 text-sm md:text-base">Zakažite termin putem Instagram profila</p>
                        <a
                            href="https://www.instagram.com/manemuskifrizer/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full md:w-auto bg-prime text-white py-2 px-4 mb-6 rounded hover:bg-prime-dark transition-colors duration-300 uppercase text-sm font-prata"
                        >
                            Poseti Instagram
                        </a>
                    </div>
                </div>
            </div>

            {/* Confirmation Message */}
            {showConfirmation && selectedServices.length > 0 && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center text-white text-sm p-4 cursor-pointer"
                    onClick={handleCloseConfirmation}
                >
                    <div className="text-center relative p-6 bg-prime rounded-lg">
                        <button
                            className="absolute top-2 right-2 text-white text-sm font-bold px-2 py-1"
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent closing when clicking on X
                                handleCloseConfirmation();
                            }}
                        >
                            X
                        </button>
                        <p className="text-xl">Uspešno ste zakazali termin.</p>
                        <p className="text-xl">Cena vašeg termina: {calculateTotalPrice()} dinara</p>
                        <p className="text-xl">Vreme trajanja termina: {calculateTotalTime()} minuta</p>
                        <p className="text-xl">Datum: {date}</p>
                        <p className="text-xl">Vreme: {time}</p>
                        <p className="text-xl">U koliko je termin popunjen, bićete kontaktirani u što kraćem vremeskom periodu <br />
                            kako bi pomerili termin.</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BookForm;
