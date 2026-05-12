function Navbar() {
  return (
    <nav className="navbar">
      <a href="#hero" className="logo">
        <span className="logo-mark">S</span>
        SynkFit
      </a>

      <ul className="nav-links">
        <li><a href="#concept">Concept</a></li>
        <li><a href="#features">Technologie</a></li>
        <li><a href="#reassurance">Avis</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <a href="#contact" className="nav-cta">
        Précommander
      </a>
    </nav>
  );
}

export default Navbar;
