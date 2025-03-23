import { Link, useLocation } from "react-router-dom";
import "../styles/Header.scss";
import logo from "../assets/logo.png";
import instagram from "../assets/instagram.png";

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-logo-name">
        <img src={logo} alt="logo esprit dev" className="header-logo" />
        <h1 className="header-title">Esprit dev</h1>
      </div>
      <nav className="header-nav">
        <Link
          to="/"
          className={`header-link ${location.pathname === "/" ? "active" : ""}`}
        >
          Accueil
        </Link>
        <Link
          to="/portfolio"
          className={`header-link ${location.pathname === "/" ? "active" : ""}`}
        >
          Portfolio
        </Link>
        <Link
          to="/contact"
          className={`header-link ${location.pathname === "/" ? "active" : ""}`}
        >
          Contact
        </Link>
        <img src={instagram} alt="logo instagram" className="logo-insta" />
      </nav>
    </header>
  );
}

export default Header;
