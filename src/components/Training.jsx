function Training() {
  const categories = [
    {
      tag: "Endurance",
      title: "Running",
      desc: "Sprint, semi, marathon — chaque foulée tracée.",
      img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
    },
    {
      tag: "Explosivité",
      title: "HIIT",
      desc: "Cardio intense, intervalles, pics de puissance.",
      img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
    },
    {
      tag: "Force",
      title: "Musculation",
      desc: "Lourd, contrôlé, suivi en charge réelle.",
      img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      tag: "Mobilité",
      title: "Yoga & Stretching",
      desc: "Récupération active, souplesse, équilibre.",
      img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section className="training" id="training">
      <div className="section-header">
        <span className="section-tag">Pour tous les sportifs</span>
        <h2>Une chaussure, toutes vos <span>disciplines.</span></h2>
        <p className="section-text">
          Du sprint explosif à la séance de mobilité, SynkFit s'adapte à chaque
          phase de votre entraînement.
        </p>
      </div>

      <div className="training-grid">
        {categories.map((c) => (
          <div className="training-card" key={c.title}>
            <img src={c.img} alt={c.title} />
            <div className="training-card-arrow">→</div>
            <div className="training-card-content">
              <span className="training-card-tag">{c.tag}</span>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Training;
