function AthleteBanner() {
  return (
    <section className="athlete-banner">
      <img
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1800&auto=format&fit=crop"
        alt="Athlète SynkFit en plein effort"
      />
      <div className="athlete-banner-content">
        <h2>
          Conçue avec des athlètes.<br />
          <span>Testée à leur intensité.</span>
        </h2>
        <p>
          Chaque capteur, chaque algorithme, chaque ligne de design a été validée
          en conditions réelles par des sportifs de haut niveau.
        </p>
        <a href="#contact" className="btn-primary">
          Rejoindre le programme
          <span className="btn-arrow">→</span>
        </a>
      </div>
    </section>
  );
}

export default AthleteBanner;
