import React from "react";
import { Link } from "react-router-dom";
import { CallbackForm } from "./Pages/callbackform";

function Footer() {
  return (
    <footer className="footer">
      <ul className="Links">
        <li><Link to="/aboutus">About Us</Link></li>
        <li><p>|</p></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><p>|</p></li>
        <li><Link to="https://www.linkedin.com/company/mwc-llc">LinkedIn</Link></li>
      </ul>
      <div className="rights">
        <p>Copyright © 2020 All Rights Reserved By <a href="/">MWC Consultancy.</a></p>

      </div>
    </footer>
      
  );
}

export default Footer;