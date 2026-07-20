import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import LogoStrip from "./components/LogoStrip";
import Services from "./components/Services";
import Features from "./components/Features";
import Process from "./components/Process";
import SocialProof from "./components/SocialProof";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navigation />

      <main>
        <Hero />
        <LogoStrip />
        <Services />
        <Features />
        <Process />
        <SocialProof />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}

export default App;
