import { useState } from "react";
import "../styles/OfferPopup.scss";

function OfferPopup() {
  const [showPopup, setShowPopup] = useState(true);

  // Fonction pour fermer la popup en cliquant en dehors
  const handleCloseOutside = (e) => {
    if (e.target.classList.contains("offer-popup")) {
      setShowPopup(false);
    }
  };

  return (
    showPopup && (
      <div className="offer-popup" onClick={handleCloseOutside}>
        <div className="popup-content">
          <h2>🎉 Offre spéciale lancement !</h2>
          <p>-50% sur votre site vitrine, pour les 5 premiers clients !</p>
          <a href="/contact" className="btn-offer">
            Je réserve mon site
          </a>
          <button onClick={() => setShowPopup(false)} className="close-btn">
            ✖
          </button>
        </div>
      </div>
    )
  );
}

export default OfferPopup;
