import 'animate.css'
import PropTypes from 'prop-types'
import mustach from '../assets/heading-line.png'

function Header({ title, subtitle, image }) {
    return (
        <div className="relative w-full h-[80vh] bg-prime-dark">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover object-left-top md:object-center opacity-80" 
                style={{ filter: 'brightness(0.6)' }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                <p className="text-lg md:text-xl animate__animated animate__fadeInDown text-third text-center w-full mb-2">
                    {subtitle}
                </p>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 animate__animated animate__fadeInUp text-white text-center w-full">
                    {title}
                </h1>
                <img src={mustach} alt="mustach" className="w-32 md:w-50" />
            </div>
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

export default Header