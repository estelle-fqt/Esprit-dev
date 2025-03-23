import "../styles/Banner.scss";
// import portrait from "../assets/estelle-fouqueteau.webp";

function Banner() {
  return (
    <div className="banner">
      <div className="banner-portrait">
        {/* <img
        src=""
        alt="Estelle Fouqueteau d'esprit dev"
        className="banner-portrait"
      /> */}
      </div>
      <div className="banner-separator"></div>
      <div className="banner-content">
        <h1 className="banner-title">👋 Hello, moi c'est Estelle</h1>
        <p className="banner-text">
          Développeur web freelance, je crée des sites performants et modernes
          pour mes clients. Besoin d'un site pro ? Travaillons ensemble !
        </p>
        <div className="banner-buttons">
          <a href="/portfolio" className="btn-primary">
            Voir mon portfolio
          </a>
          <a href="/contact" className="btn-secondary">
            Me contacter
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
