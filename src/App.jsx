import { useState, useEffect } from "react";
import "./styles/global.css";
import "./styles/shared.css";

import Navbar       from "./components/Navbar";
import Hero         from "./components/Hero";
import VideoSection from "./components/VideoSection";
import SocialBar    from "./components/SocialBar";
import Audience     from "./components/Audience";
import Benefits     from "./components/Benefits";
import HowItWorks   from "./components/HowItWorks";
import Carousel     from "./components/Carousel";
import Gallery      from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Athletes     from "./components/Athletes";
import Specs        from "./components/Specs";
import FAQ          from "./components/FAQ";
import CTAFinal     from "./components/CTAFinal";
import Footer       from "./components/Footer";
import StickyBar    from "./components/StickyBar";

export default function App() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <SocialBar />
      <VideoSection />
      <Audience />
      <Benefits />
      <HowItWorks />
      <Carousel />
      <Gallery />
      <Testimonials />
      <Athletes />
      <Specs />
      <FAQ />
      <CTAFinal />
      <Footer />
      <StickyBar visible={showSticky} />
    </>
  );
}
