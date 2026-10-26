import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import seasonal from "./components/sesonal-trips";
import AirlinePartners from "./components/AirlinePartners";
import Collections from "./components/Collections";
import HiddenGems from "./components/HiddenGems";
import AppDownload from "./components/AppDownload";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <seasonal/>
      <AirlinePartners />
      <Collections />
      <HiddenGems />
      <AppDownload />
      <Footer />
    </div>
  );
}

export default App;