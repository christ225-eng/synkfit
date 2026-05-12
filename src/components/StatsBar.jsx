function StatsBar() {
  const stats = [
    { value: "2 500+", label: "Athlètes connectés" },
    { value: "99,2 %", label: "Précision capteur" },
    { value: "180 BPM", label: "Pic mesuré" },
    { value: "30 j", label: "Autonomie" },
  ];

  return (
    <div className="stats-bar">
      {stats.map((s) => (
        <div className="stat-item" key={s.label}>
          <strong>{s.value}</strong>
          <span>{s.label}</span>
        </div>
      ))}
    </div>
  );
}

export default StatsBar;
