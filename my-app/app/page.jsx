import About from '@/components/About';
import Hero from'@/components/Hero'
import Services from '@/components/Services';
import Work from '@/components/Work';
import Reviews from '@/components/Reviews';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <main>
      <Hero/>
      <About />
      <Services />
      <Work />
      <Reviews />
      <CTA />
    </main>
  );
}
