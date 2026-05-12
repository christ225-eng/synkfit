function Concept() {
  return (
    <section className="concept" id="concept">
      <div className="concept-left">
        <span className="section-tag">Le concept</span>
        <h2>
          Comprendre son corps<br />
          pour mieux <span>performer.</span>
        </h2>
        <p className="concept-intro">
          Une nouvelle génération d'entraînement où chaque foulée devient une
          donnée actionnable.
        </p>

        <div className="concept-image">
          <img
            src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1400&auto=format&fit=crop"
            alt="Athlète en course explosive"
          />
          <span className="concept-image-caption">Sprint · Live data</span>
        </div>
      </div>

      <div className="concept-right">
        <p>
          SynkFit ne vend pas seulement une chaussure de sport. La marque
          propose une nouvelle manière de s'entraîner : relier l'effort physique
          à une lecture claire et instantanée des données du corps.
        </p>

        <div className="concept-steps">
          <div className="concept-step">
            <span className="concept-step-num">01</span>
            <div className="concept-step-body">
              <h4>Capter</h4>
              <p>Le capteur intégré mesure votre cardio à chaque sprint, sans bracelet ni équipement gênant.</p>
            </div>
          </div>

          <div className="concept-step">
            <span className="concept-step-num">02</span>
            <div className="concept-step-body">
              <h4>Comprendre</h4>
              <p>Visualisez l'intensité réelle de votre effort, vos zones cardiaques et vos seuils en direct.</p>
            </div>
          </div>

          <div className="concept-step">
            <span className="concept-step-num">03</span>
            <div className="concept-step-body">
              <h4>Progresser</h4>
              <p>Ajustez votre performance avec précision pour repousser vos limites en toute sécurité.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Concept;
