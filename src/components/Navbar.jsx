import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">Mane Barbershop</Link>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/appointment">Appointment</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar