import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/scroll-reveal";
import HeroImage from "@/public/horse1.jpg";

type HeroSectionProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  imageSrc?: string;
};

export default function HeroSection({
  title = "This Headline Grabs Visitors' Attention",
  description = "A short description that introduces visitors to your business offerings",
  buttonText = "Contact Us",
  buttonHref = "/contact",
}: HeroSectionProps) {
  return (
    <section className="bg-white pt-[calc(var(--header-height)-100px)]">
      <div className="section-container grid min-h-[70vh] items-center gap-8 md:grid-cols-2">
        <ScrollReveal immediate variant="fade-up" delay={100}>
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl text-primary md:text-5xl lg:text-6xl">
              {title}
            </h1>
            <hr className="w-16 border-2 border-accent" />
            <p className="max-w-md text-base leading-relaxed text-muted md:text-lg">
              {description}
            </p>
            <div>
              <Link href={buttonHref} className="btn-dark">
                {buttonText}
              </Link>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal immediate variant="fade-right" delay={300}>
          <div className="overflow-hidden rounded-lg shadow-lg">
           <Image src={HeroImage} alt="Hero Image" className="aspect-square w-full object-cover" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
