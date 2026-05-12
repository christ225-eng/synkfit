import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import Concept from "./components/Concept";
import Training from "./components/Training";
import Features from "./components/Features";
import AthleteBanner from "./components/AthleteBanner";
import Reassurance from "./components/Reassurance";
import FinalCTA from "./components/FinalCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <StatsBar />
        <Concept />
        <Training />
        <Features />
        <AthleteBanner />
        <Reassurance />
        <FinalCTA />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
