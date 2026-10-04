import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/scroll-reveal";
import AboutImage1 from "@/public/horse2.jpg";
import AboutImage2 from "@/public/horse3.jpg";

type AboutSectionProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  images?: string[];
};

export default function AboutSection({
  title = "About Our Company",
  description = "Use this section to describe your company and the services you offer. You could share your company's story and details about why you are in business. The goal is to create a connection with the visitor and give them confidence to work with you.",
  buttonText = "Learn More",
  buttonHref = "/about-me",

}: AboutSectionProps) {
  return (
    <section className="section-dark py-16 md:py-24 text-white">
      <div className="section-container">
        <ScrollReveal variant="fade-up">
          <h2 className="section-title">{title}</h2>
        </ScrollReveal>

        <div className="mb-10 grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-4">
          <ScrollReveal variant="fade-up" delay={100}>
            <div className="overflow-hidden rounded-lg shadow-md">
              <Image
                src={AboutImage1}
                alt=""
                className="aspect-square w-full object-cover"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={300}>
            <div className="overflow-hidden rounded-lg shadow-md">
              <Image
                src={AboutImage2}
                alt=""
                className="aspect-square w-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal variant="fade-up" delay={200}>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-8 leading-relaxed text-white">{description}</p>
            <Link href={buttonHref} className="btn-outline-dark">
              {buttonText}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
