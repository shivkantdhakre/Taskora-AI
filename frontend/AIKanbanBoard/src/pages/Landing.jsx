import { motion } from "framer-motion";
import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import HowItWorks from "../components/landing/HowItWorks";
import AISpotlight from "../components/landing/AISpotlight";
import FinalCTA from "../components/landing/FinalCTA";
import Footer from "../components/landing/Footer";

const Landing = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.4 }}
    className="min-h-screen overflow-x-clip bg-[var(--color-bg)] transition-colors duration-300"
  >
    <Navbar />
    <Hero />
    <Features />
    <HowItWorks />
    <AISpotlight />
    <FinalCTA />
    <Footer />
  </motion.div>
);

export default Landing;
