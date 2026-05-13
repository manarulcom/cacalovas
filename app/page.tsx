import Navbar from '@/components/Navbar';
import ScrollHandler from '@/components/ScrollHandler';
import Footer from '@/components/Footer';
import AnimateIn from '@/components/AnimateIn';
import HeroSection from '@/components/sections/HeroSection';
import SignatureSection from '@/components/sections/SignatureSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import BeforeAfterSection from '@/components/sections/BeforeAfterSection';
import TestimoniSection from '@/components/sections/TestimoniSection';
import SocialSection from '@/components/sections/SocialSection';
import FaqSection from '@/components/sections/FaqSection';
import CityLinksSection from '@/components/sections/CityLinksSection';
import ContactSection from '@/components/sections/ContactSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';

export default function Home() {
  return (
    <>
      <ScrollHandler />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />

        <AnimateIn direction="up">
          <SignatureSection />
        </AnimateIn>


        <AnimateIn direction="up">
          <PortfolioSection />
        </AnimateIn>

        <AnimateIn direction="up">
          <WhyChooseUsSection />
        </AnimateIn>

        <AnimateIn direction="up">
          <ServicesSection />
        </AnimateIn>

        <AnimateIn direction="up">
          <TestimoniSection />
        </AnimateIn>


        <AnimateIn direction="up">
          <ContactSection />
        </AnimateIn>

        <AnimateIn direction="up">
          <FaqSection />
        </AnimateIn>
      </main>
      <Footer />


    </>
  );
}
