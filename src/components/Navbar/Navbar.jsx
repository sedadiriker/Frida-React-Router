import { NavLink } from "react-router-dom"
import "./Navbar.scss"
const Navbar = () => {
  return (
    <div className="nav">
      <ul className="navbar">
        <NavLink className="home">Home</NavLink>
        <NavLink className="about">About</NavLink>
        <NavLink className="projects">Projects</NavLink>
        <NavLink className="contact">Contact</NavLink>
      </ul>
    </div>
  )
}

export default Navbar
