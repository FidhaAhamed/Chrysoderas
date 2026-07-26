import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Lore from "./components/sections/Lore";
import HackathonHub from "./components/sections/HackathonHub";
import Battlegrounds from "./components/sections/Battlegrounds/Battlegrounds";
import TreasureHuntBanner from "./components/sections/TreasureHuntBanner";
import Schedule from "./components/sections/Schedule/Schedule";
import FAQ from "./components/sections/faq";

function App() {
  return (
    <div className="bg-[#050914]">
      <Navbar />
      <main>
        <Hero />
        <Lore />
        <HackathonHub />
        <Battlegrounds />
        <TreasureHuntBanner />
        <Schedule />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;