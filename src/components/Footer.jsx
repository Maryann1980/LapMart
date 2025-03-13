import React from "react";
import "./Footer.css"; // Import the CSS file
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
      <p>&copy;{new Date().getFullYear()} LapMart.</p>
        <nav>
          <Link to="/">Shop</Link>
            <Link to="/cart">Cart</Link>
          <a href="https://www.linkedin.com/in/maryann-ifunanya-igwe-94083331b">Linkedin</a>
          <a href="https://github.com/Maryann1980">GitHub</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
