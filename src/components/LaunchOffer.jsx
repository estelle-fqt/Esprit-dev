import "../styles/LaunchOffer.scss";

function OfferBanner() {
  return (
    <div className="offer-banner">
      <p>🎉 Offre de lancement : -50% sur votre site vitrine ! 🔥</p>
      <a href="/contact" className="btn-offer">
        Profiter de l’offre
      </a>
    </div>
  );
}

export default OfferBanner;
