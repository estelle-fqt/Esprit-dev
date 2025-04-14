import "../styles/Footer.scss";
import logoInsta from "../assets/instagram.webp";
import logoGithub from "../assets/github.webp";
import logoLinkedin from "../assets/linkedin.webp";

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
        © Copyright 2025. Réalisé par Esprit dev
      </p>
      <div className="footer-contact">
        <p className="footer-mobile">06.48.17.56.72</p>
        <div className="footer-icons">
          <a href="https://www.instagram.com/esprit.dev/" target="blank">
            <img src={logoInsta} alt="icon Instagram" />
          </a>
          <a href="https://github.com/estelle-fqt" target="blank">
            <img src={logoGithub} alt="icon Github" />
          </a>
          <a
            href="https://www.linkedin.com/in/estelle-fouqueteau-94417725a/"
            target="blank"
          >
            <img src={logoLinkedin} alt="icon Linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
