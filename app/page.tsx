import AboutSection from "@/components/about-section";
import BenefitSection from "@/components/benefit-section";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import TestimonialsSection from "@/components/testimonials-section";
import WhyWorkWithUsSection from "@/components/why-work-with-us-section";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-28 md:pt-36">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <BenefitSection />
        <WhyWorkWithUsSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
