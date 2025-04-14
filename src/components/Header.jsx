import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "../styles/Header.scss";
import logo from "../assets/logo.png";
import instagram from "../assets/instagram.webp";

function Header() {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <a href="/" className="header-logo-name">
        <img src={logo} alt="logo esprit dev" className="header-logo" />
        <h1 className="header-title">Esprit dev</h1>
      </a>
      <nav className={`header-nav ${isOpen ? "active" : ""}`}>
        <Link
          to="/"
          className={`header-link ${location.pathname === "/" ? "active" : ""}`}
          onClick={toggleMenu}
        >
          Accueil
        </Link>
        <Link
          to="/portfolio"
          className={`header-link ${location.pathname === "/" ? "active" : ""}`}
          onClick={toggleMenu}
        >
          Réalisations
        </Link>
        <Link
          to="/contact"
          className={`header-link ${location.pathname === "/" ? "active" : ""}`}
          onClick={toggleMenu}
        >
          Contact
        </Link>
        <a href="https://www.instagram.com/esprit.dev/" target="blank">
          <img src={instagram} alt="logo instagram" className="logo-insta" />
        </a>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? "✖" : "☰"}
      </button>
    </header>
  );
}

export default Header;
