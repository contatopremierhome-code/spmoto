import { HeroSection } from '@/components/landing/HeroSection';
import { OfferSection } from '@/components/landing/OfferSection';
import { ProductGallery } from '@/components/landing/ProductGallery';
import { PainSolutionSection } from '@/components/landing/PainSolutionSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { SpecsSection } from '@/components/landing/SpecsSection';
import { Footer } from '@/components/landing/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <ProductGallery />
      <OfferSection />
      <PainSolutionSection />
      <TestimonialsSection />
      <SpecsSection />
      <Footer />
    </main>
  );
}
