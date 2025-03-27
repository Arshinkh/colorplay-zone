
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Activities from '@/components/Activities';
import Booking from '@/components/Booking';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Activities />
      <Features />
      <Booking />
      <Footer />
    </div>
  );
};

export default Index;
