import "../styles/Footer.scss";
import logoInsta from "../assets/instagram.png";
import logoGithub from "../assets/github.png";
import logoLinkedin from "../assets/linkedin.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-text">
        <h1>Estelle Fouqueteau</h1>
        <p>
          Une développeuse Web Front-end pationnée qui accompagne les
          commerçants et artisans a partager leur univers.
        </p>
      </div>
      <p className="footer-copyright">
        ©️ Copyright 2025. Réalisé par Esprit dev
      </p>
      <div className="footer-icons">
        <img src={logoInsta} alt="icon Instagram" />
        <img src={logoGithub} alt="icon Github" />
        <img src={logoLinkedin} alt="icon Linkedin" />
      </div>
    </div>
  );
}

export default Footer;
