import { useState } from "react";
import "../styles/ContactForm.scss";
import photo from "../assets/estelleFouqueteau.webp"; // remplace par le bon chemin
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // Pour afficher le message de confirmation

  // Fonction pour gérer le changement des inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fonction pour envoyer le formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formUrl = "https://formspree.io/f/mdkegjaa";
    const response = await fetch(formUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Message envoyé avec succès !");
      setFormData({ firstName: "", lastName: "", email: "", message: "" }); // Réinitialise le formulaire
    } else {
      setStatus("Erreur lors de l'envoi. Réessayez plus tard.");
    }
  };

  return (
    <section className="contact">
      <h2 className="contact-title">
        📩 Esprit dev est à votre écoute.
        <br />
        En quoi pouvons-nous vous aider ?
      </h2>

      <div className="contact-content">
        {/* Partie gauche - infos */}
        <div className="contact-infos">
          <img src={photo} alt="Photo de profil" className="contact-photo" />
          <h3>Estelle Fouqueteau</h3>
          <p>
            <FaPhoneAlt /> 06 48 17 56 72
          </p>
          <p>
            <FaEnvelope />
            <a href="mailto:contact@espritdev.com" className="contact-email">
              contact@espritdev.com
            </a>
          </p>

          <div className="social-links">
            <a
              href="https://instagram.com/tonprofil"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com/in/tonprofil"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="input-group">
            <label htmlFor="firstName">Prénom</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="lastName">Nom</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn-submit">
            Envoyer
          </button>

          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
