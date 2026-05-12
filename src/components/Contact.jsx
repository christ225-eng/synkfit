import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("https://hook.eu1.make.com/47tk163vxujp7da1hndu6o33fgbbg1ol", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        date: new Date().toISOString(),
      }),
    });

    alert("Inscription envoyée !");
    setFormData({ name: "", email: "" });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-left">
        <span className="section-tag">Contact</span>
        <h2>Restez connecté au <span>lancement de SynkFit.</span></h2>
        <p className="section-text">
          Recevez les nouveautés, le freebie de présentation et les premières
          informations sur la sortie de la chaussure intelligente.
        </p>

        <div className="contact-features">
          <div className="contact-feature">
            <span className="contact-feature-icon">✓</span>
            Accès prioritaire à la précommande
          </div>
          <div className="contact-feature">
            <span className="contact-feature-icon">✓</span>
            Freebie technologie offert
          </div>
          <div className="contact-feature">
            <span className="contact-feature-icon">✓</span>
            Aucun spam — désinscription en 1 clic
          </div>
        </div>
      </div>

      <div className="contact-form-card">
        <h3>Rejoindre la liste d'attente</h3>
        <p className="form-intro">Soyez prévenu en avant-première du lancement.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Nom complet</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="vous@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn-primary">
            Recevoir les infos
            <span className="btn-arrow">→</span>
          </button>

          <p className="form-disclaimer">
            En soumettant ce formulaire, vous acceptez de recevoir les communications
            SynkFit. Vos données restent confidentielles.
          </p>
        </form>
      </div>
    </section>
  );
}

export default Contact;
