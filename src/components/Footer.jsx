import "../styles/Footer.scss";
// import logoInsta from "../assets/instagram.webp";
// import logoGithub from "../assets/github.webp";
// import logoLinkedin from "../assets/linkedin.webp";
// import logoPhone from "../assets/phone.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FaPhoneAlt, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-text">
        <div className="footer-phone">
          {/* <FontAwesomeIcon icon="fa-solid fa-phone" />{" "} */}
          {/* <img src={logoPhone} alt="icon téléphone" /> */}
          <FaPhoneAlt />
          <h1>06.48.17.56.72</h1>
        </div>
        <p>
          Esprit dev, entreprise experte et pationnée qui vous accompagne a
          partager votre univers
        </p>
      </div>
      <p className="footer-copyright">
        © Copyright 2025. Réalisé par Esprit dev
      </p>
      <div className="footer-contact">
        <p className="footer-mobile"></p>
        <div className="footer-icons">
          <a href="https://www.instagram.com/esprit.dev/" target="blank">
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/estelle-fouqueteau-94417725a/"
            target="blank"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
