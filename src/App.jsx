import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Features from "./components/Features.jsx";
import AppPreview from "./components/AppPreview.jsx";
import Community from "./components/Community.jsx";
import Experts from "./components/Experts.jsx";
import Waitlist from "./components/Waitlist.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-ocean-950">
      <Nav />
      <main>
        <Hero />
        <About />
        <Features />
        <AppPreview />
        <Community />
        <Experts />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}
