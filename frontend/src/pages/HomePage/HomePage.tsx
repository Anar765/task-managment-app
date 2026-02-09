import Navbar from '../../components/HomePage/Navbar';
import Hero from '../../components/HomePage/Hero';
import Footer from '../../components/HomePage/Footer';
import Features from '../../components/HomePage/Features';
import Benefits from '../../components/HomePage/Benefits';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <Features />
        <Benefits />
        <Footer />
    </div>
  );
}

export default HomePage