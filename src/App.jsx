import { useCallback, useState } from "react";
import About from "./components/About";
import BookingProcess from "./components/BookingProcess";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import IntroLoader from "./components/IntroLoader";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const handleIntroComplete = useCallback(() => setIntroComplete(true), []);

  return (
    <>
      <IntroLoader onComplete={handleIntroComplete} />
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero introComplete={introComplete} />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <BookingProcess />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
