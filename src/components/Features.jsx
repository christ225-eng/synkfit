function Features() {
  const features = [
    {
      title: "Fréquence cardiaque en direct",
      text: "Suivez instantanément les variations de votre rythme cardiaque pendant l'effort, à la seconde près.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12h4l3-9 4 18 3-9h4" />
        </svg>
      ),
    },
    {
      title: "Analyse du sprint",
      text: "Mesurez l'intensité, la vitesse et l'impact de chaque phase explosive de votre course.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
        </svg>
      ),
    },
    {
      title: "Confort haute performance",
      text: "Une chaussure conçue pour rester légère, stable et adaptée à l'effort le plus exigeant.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
    },
    {
      title: "Data claire et utile",
      text: "Des informations compréhensibles pour progresser sans se perdre dans des données compliquées.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
    },
    {
      title: "Synchronisation app",
      text: "Vos données s'envoient automatiquement sur votre dashboard, prêtes à être analysées.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12.55a11 11 0 0 1 14.08 0" />
          <path d="M1.42 9a16 16 0 0 1 21.16 0" />
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
          <line x1="12" y1="20" x2="12.01" y2="20" />
        </svg>
      ),
    },
    {
      title: "Autonomie longue durée",
      text: "Jusqu'à 30 jours d'utilisation intensive sans recharge, pour vous concentrer sur l'essentiel.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="6" width="18" height="12" rx="2" ry="2" />
          <line x1="23" y1="13" x2="23" y2="11" />
          <line x1="6" y1="10" x2="6" y2="14" />
        </svg>
      ),
    },
  ];

  return (
    <section className="features" id="features">
      <div className="section-header">
        <span className="section-tag">Fonctionnalités</span>
        <h2>Une technologie pensée pour les <span>sportifs exigeants.</span></h2>
        <p className="section-text">
          SynkFit transforme chaque sprint en données utiles pour mieux comprendre
          votre effort et améliorer vos performances.
        </p>
      </div>

      <div className="features-grid">
        {features.map((f) => (
          <div className="feature-card" key={f.title}>
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
