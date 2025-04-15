import "../styles/AfterProject.scss";

function AfterProject() {
  return (
    <section className="after-project">
      <div className="after-project-container">
        <h2 className="after-title">
          Et après la création de votre site web ?
        </h2>
        <p className="after-intro">
          Chez <strong>Esprit Dev</strong>, notre mission ne s'arrête pas une
          fois votre site livré.
        </p>
        <p className="after-text">
          ✨ Besoin d’ajouter un nouveau produit ? Un article ? Mettre à jour
          vos horaires ? Nous vous accompagnons dans l’évolution de votre site,
          au rythme de votre activité.
        </p>

        <ul className="after-list">
          <li>Mise à jour de contenus</li>
          <li>Actualisation de vos pages, images, infos pratiques</li>
          <li>Conseils pour améliorer votre présence en ligne</li>
          <li>Aide à la rédaction ou à l’optimisation de vos textes</li>
        </ul>

        <p className="after-conclusion">
          🎯 <strong>Un accompagnement personnalisé</strong>, selon vos besoins,
          vos outils et votre autonomie.
        </p>
      </div>
    </section>
  );
}

export default AfterProject;
