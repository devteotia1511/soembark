import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import LogoStrip from "./components/LogoStrip";
import Services from "./components/Services";
import Process from "./components/Process";
import SocialProof from "./components/SocialProof";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";
import InfluencerMarketing from "./components/InfluencerMarketing";

function App() {
  return (
    <>
      <Navigation />

      <main>
        <Hero />
        <LogoStrip />
        <Services />
        <InfluencerMarketing />
        <Process />
        <SocialProof />
        <CTABanner />
      </main>

      <Footer />
    </>
  );
}

export default App;
