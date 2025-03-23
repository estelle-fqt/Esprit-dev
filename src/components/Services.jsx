import "../styles/Services.scss";

const services = [
  {
    id: 1,
    icon: "💻",
    title: "Développement de sites vitrines",
    description:
      "Création de sites web modernes et responsives adaptés à votre activité.",
  },
  {
    id: 2,
    icon: "🚀",
    title: "Optimisation SEO & performance",
    description:
      "Amélioration du référencement naturel et optimisation de la vitesse du site.",
  },
  {
    id: 3,
    icon: "🛠️",
    title: "Maintenance & support technique",
    description:
      "Correction de bugs, mises à jour techniques et veille sur le bon fonctionnement.",
  },
];

function Services() {
  return (
    <section className="services">
      <h2 className="services-title">Services</h2>
      <div className="services-container">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Section spéciale pour l'Accompagnement */}
      <div className="accompagnement">
        <h2 className="accompagnement-title">
          🔄 Accompagnement & Actualisation
        </h2>
        <p className="accompagnement-description">
          Vous souhaitez mettre à jour régulièrement votre site sans effort ? Je
          vous propose un accompagnement pour l'ajout de nouveaux produits,
          articles et contenus.
        </p>
        <div className="pricing-options">
          <div className="pricing-card">
            <h3>Abonnement Mensuel</h3>
            <p>Un suivi régulier avec mises à jour illimitées.</p>
            <span className="price">XX€/mois</span>
            <a href="/contact" className="btn-primary">
              Souscrire
            </a>
          </div>
          <div className="pricing-card">
            <h3>Paiement à la Prestation</h3>
            <p>Intervention ponctuelle selon vos besoins et envies.</p>
            <span className="price">XX€/intervention</span>
            <a href="/contact" className="btn-secondary">
              Me contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
