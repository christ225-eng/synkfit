function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-text">
        <span className="tag">Performance • Data • Innovation</span>

        <h2>
          Maîtrisez vos performances<br />
          <span>en temps réel</span>
        </h2>

        <p className="description">
          SynkFit est la chaussure de sport intelligente qui capte votre
          fréquence cardiaque pendant vos sprints. Progressez avec précision,
          sécurité et contrôle.
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
            src="https://images.unsplash.com/photo-1639619287843-da4b297d7672?q=80&w=1907&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="SynkFit — chaussure de sport intelligente"
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
