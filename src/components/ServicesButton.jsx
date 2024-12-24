import { useNavigate } from 'react-router-dom'

function ServicesButton() {
    const navigate = useNavigate();

    return (
        <button 
            onClick={() => navigate('/services')}
            className="relative bg-prime text-white px-8 py-3 rounded-sm uppercase text-sm
            overflow-hidden group">
            <span className="relative z-10">Our Services</span>
            <div className="absolute inset-0 bg-third-dark transform translate-x-[-100%] 
                group-hover:translate-x-0 transition-transform duration-500"></div>
        </button>
    )
}

export default ServicesButton