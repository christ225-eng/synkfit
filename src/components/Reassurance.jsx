function Reassurance() {
  const testimonials = [
    {
      quote:
        "Pour la première fois, je comprends vraiment ce qu'il se passe pendant mes sprints. La data est claire, instantanée. Un game-changer.",
      name: "Léa Marquez",
      role: "Sprinteuse — Athlétisme",
      initials: "LM",
      rating: 5,
    },
    {
      quote:
        "Confort impeccable, design premium, et surtout des chiffres qui ont vraiment du sens à l'entraînement. Je ne reviens plus en arrière.",
      name: "Thomas Reyel",
      role: "Coach performance",
      initials: "TR",
      rating: 5,
    },
    {
      quote:
        "La fluidité entre la chaussure et l'app est bluffante. C'est ce qu'on attend d'un produit fitness en 2026 — précis et discret.",
      name: "Amina Diallo",
      role: "Runneuse semi-marathon",
      initials: "AD",
      rating: 5,
    },
    {
      quote:
        "Une vraie innovation. Je suis impressionné par la qualité des données et la simplicité de lecture. Bravo SynkFit.",
      name: "Julien Carré",
      role: "Préparateur physique",
      initials: "JC",
      rating: 5,
    },
  ];

  return (
    <section className="reassurance" id="reassurance">
      <div className="section-header">
        <span className="section-tag">Ils en parlent</span>
        <h2>Une expérience pensée pour inspirer confiance</h2>
        <p className="section-text">
          Athlètes, coachs et passionnés témoignent de la fiabilité, du confort
          et de l'utilité réelle de SynkFit.
        </p>
      </div>

      <div className="reassurance-grid">
        {testimonials.map((t) => (
          <div className="reassurance-card" key={t.name}>
            <div className="reassurance-rating">
              {"★".repeat(t.rating)}
            </div>
            <p>"{t.quote}"</p>
            <div className="reassurance-author">
              <div className="reassurance-avatar">{t.initials}</div>
              <div className="reassurance-author-meta">
                <h3>{t.name}</h3>
                <small>{t.role}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reassurance;
