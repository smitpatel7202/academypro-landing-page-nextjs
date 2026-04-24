import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Curriculum from '@/components/Curriculum';
import Testimonials from '@/components/Testimonials';
import Instructor from '@/components/Instructor';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Curriculum />
        <Testimonials />
        <Instructor />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
