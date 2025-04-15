import "../styles/Services.scss";
import { useState } from "react";
import AfterProject from "../components/AfterProject";

const services = [
  {
    id: 1,
    icon: "💻",
    title: "Conception de sites vitrines professionnels",
    description: "Un site vitrine moderne, clair et adapté à votre activité.",
    backTitre: "Envie d’être visible en ligne ?",
    backDescription:
      "Nous créons pour vous un site professionnel et responsive, qui s’adapte à tous les écrans, pour présenter votre entreprise, vos services ou vos produits.",
    backResultat:
      "Esprit dev s’occupe de tout : design, intégration, mise en ligne.",
  },
  {
    id: 2,
    icon: "🚀",
    title: "Optimisation SEO & performance",
    description:
      "Un site rapide et bien référencé pour être trouvé sur Google.",
    backTitre: "Votre site est lent ou invisible sur Google ?",
    backDescription:
      "Nous le corrigeons en optimisant les images, le code, la structure et les balises SEO.",
    backResultat:
      "Résultat : un site plus rapide, mieux positionné, et plus de visiteurs.",
  },
  {
    id: 3,
    icon: "🛠️",
    title: "Maintenance & support technique",
    description:
      "Un accompagnement fiable pour garder un site à jour et sécurisé",
    backTitre: "Vous ne voulez pas vous occuper de la technique ?",
    backDescription:
      "Nous nous en chargeons ! Esprit dev vous propose des interventions ponctuelles ou un suivi régulier : mises à jour, sécurité, ajout de contenu (nouveaux produits, articles, etc.).",
    backResultat: "Vous restez concentré sur votre activité.",
  },
];

function Services() {
  const [flippedCard, setFlippedCard] = useState(null);

  const handleFlip = (id) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  return (
    <section className="services">
      <h2 className="services-title">Services</h2>
      <div className="services-container">
        {services.map((service) => (
          <div
            key={service.id}
            className={`service-card ${
              flippedCard === service.id ? "flipped" : ""
            }`}
            onClick={() => handleFlip(service.id)}
          >
            <div className="card-inner">
              <div className="card-front">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
              <div className="card-back">
                <h3 className="back-titre">{service.backTitre}</h3>
                <p className="description-back">{service.backDescription}</p>
                <p className="description-back">{service.backResultat}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <AfterProject />

      {/* Section spéciale pour l'Accompagnement */}
      <div className="accompagnement">
        <h2 className="accompagnement-title">
          🔄 Accompagnement & Actualisation
        </h2>
        <p className="accompagnement-description">
          Vous souhaitez mettre à jour régulièrement votre site sans effort ?
          Esprit dev vous propose un accompagnement pour l'ajout de nouveaux
          produits, articles et contenus.
        </p>
        <div className="pricing-options">
          <div className="pricing-card">
            <h3>Abonnement Mensuel</h3>
            <p>Un suivi régulier avec mises à jour illimitées.</p>
            <span className="price">59€/mois</span>
            <a href="/contact" className="btn-primary">
              Souscrire
            </a>
          </div>
          <div className="pricing-card">
            <h3>Paiement à la Prestation</h3>
            <p>Intervention ponctuelle selon vos besoins et envies.</p>
            <span className="price">19€/intervention*</span>
            <a href="/contact" className="btn-secondary">
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
