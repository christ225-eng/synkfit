import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Concept from "./components/Concept";
import Features from "./components/Features";
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
        <Concept />
        <Features />
        <Reassurance />
        <FinalCTA />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;