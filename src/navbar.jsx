import { useState } from "react";
import logo from "./mwc-logo-trans.png"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
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
          <li className="Nav-item dropdown">
            <CustomLink to="/services" className="services">Services<FontAwesomeIcon icon={faAngleDown} style={{marginLeft : '0.5rem'}} /></CustomLink>
              <ul className="dropdown-menu">
                <li><CustomLink to="/services/strategicmanagementconsultancy">Strategic Management Consultancy</CustomLink></li>
                <li><CustomLink to="/services/projectmanagement">Project Management</CustomLink></li>
                <li><CustomLink to="/services/businesstraining">Business & Professional Training</CustomLink></li>
                <li><CustomLink to="/services/businessadvisory">Business Development Advisory</CustomLink></li>
                <li><CustomLink to="/services/ess">Environment Sustainability Solutions</CustomLink></li>
                <li><CustomLink to="/services/esg">ESG and Sustainability Solutions</CustomLink></li>
              </ul>
          </li>
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