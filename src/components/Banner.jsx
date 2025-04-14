import "../styles/Banner.scss";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1 className="banner-title">Bienvenue chez Esprit dev</h1>
        <p className="banner-text">
          Esprit dev est spécialisé dans la création de sites vitrines
          sur-mesure. Nous concevons des solutions digitales modernes et
          optimisées pour une visibilité maximale.
          <br /> Vous avez un projet ? Discutons-en !
        </p>
        <div className="banner-buttons">
          <Link to="/portfolio">
            <button className="btn-primary">Réalisations</button>
          </Link>
          <Link to="/contact">
            <button className="btn-secondary">Demander un devis gratuit</button>
          </Link>
        </div>
      </div>
      <div className="banner-separator"></div>
      <div className="banner-slider"></div>
    </div>
  );
}

export default Banner;
