function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-text">
        <span className="tag">Performance · Data · Innovation</span>

        <h2>
          Repoussez vos limites<br />
          <span>en temps réel.</span>
        </h2>

        <p className="description">
          SynkFit est la chaussure de sport intelligente qui capte votre fréquence
          cardiaque pendant vos sprints. Plus de puissance, plus de précision,
          plus de contrôle.
        </p>

        <div className="hero-buttons">
          <a href="#features" className="btn-primary">
            Découvrir la technologie
            <span className="btn-arrow">→</span>
          </a>
          <a href="#contact" className="btn-secondary">
            Précommander
          </a>
        </div>

        <div className="hero-meta">
          <div className="hero-meta-item">
            <strong>+2 500</strong>
            <span>Sportifs en liste</span>
          </div>
          <div className="hero-meta-item">
            <strong>99,2 %</strong>
            <span>Précision capteur</span>
          </div>
          <div className="hero-meta-item">
            <strong>24/7</strong>
            <span>Suivi data</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-image-card">
          <img
            src="https://plus.unsplash.com/premium_photo-1770544873561-aebddbed4e23?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Les chaussures de sport SynkFit en action, avec des données de fréquence cardiaque affichées en temps réel."
          />

          <div className="hero-stats">
            <div>
              <span>Fréquence</span>
              <strong>148 BPM</strong>
            </div>
            <div>
              <span>Vitesse</span>
              <strong>29 km/h</strong>
            </div>
            <div>
              <span>Sprint</span>
              <strong>Live</strong>
            </div>
          </div>
        </div>

        <div className="live-badge">
          <span className="live-dot"></span>
          Tracking actif
        </div>

        <div className="bpm-bubble">
          <small>Cardio peak</small>
          <strong>172 BPM</strong>
        </div>
      </div>
    </section>
  );
}

export default Hero;
