import { useState } from "react";
import logo from "./mwc-logo-trans.png"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
      <nav className="Nav">
        <Link to="/" className="Site-Logo">
          <img src={logo} width={300} alt="Site Logo" />
        </Link>
        <button className="Nav-toggle" onClick={toggleMenu}>
          <span className="Nav-toggle-icon">&#9776;</span> 
        </button>
        <ul className={`Nav-links ${isOpen ? 'active' : ''}`}>
          <CustomLink to="/" className="home">Home</CustomLink>
          <CustomLink to="/aboutus" className="abtus">About Us</CustomLink>
          <CustomLink to="/services" className="servies">Services</CustomLink>
          <CustomLink to="/contact" className="contact">Contact Us</CustomLink>
        </ul>
      </nav>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }