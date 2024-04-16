import { NavLink } from "react-router-dom"
import "./Navbar.scss"
const Navbar = () => {
  return (
    <div className="nav">
      <ul className="navbar">
        <NavLink to="/" className="home-nav">Home</NavLink>
        <NavLink to="/about" className="about-nav">About</NavLink>
        <NavLink to="/projects" className="projects-nav">Projects</NavLink>
        <NavLink to="/contact" className="contact-nav">Contact</NavLink>
      </ul>
    </div>
  )
}

export default Navbar
