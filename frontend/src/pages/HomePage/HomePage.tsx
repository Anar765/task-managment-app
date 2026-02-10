import Navbar from '../../components/HomePage/Navbar';
import Hero from '../../components/HomePage/Hero';
import Footer from '../../components/HomePage/Footer';
import Features from '../../components/HomePage/Features';
import Benefits from '../../components/HomePage/Benefits';
import CTA from '../../components/HomePage/CTA';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <Features />
        <Benefits />
        <CTA />
        <Footer />
    </div>
  );
}

export default HomePage