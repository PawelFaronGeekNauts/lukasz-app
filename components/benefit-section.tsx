import Link from "next/link";
import ImageCarousel from "@/components/image-carousel";
import ScrollReveal from "@/components/scroll-reveal";
import Horse1 from "@/public/horse1.jpg"
import Horse2 from "@/public/horse3.jpg"
import Horse3 from "@/public/horse5.jpg"
import { StaticImageData } from "next/image";


type BenefitSectionProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  carouselImages?:StaticImageData[];
};

export default function BenefitSection({
  title = "A Key Benefit You Want to Emphasize",
  description = "Use this short paragraph to explain how you will deliver this benefit to the visitor if they decide to work with you.",
  buttonText = "Contact Us",
  buttonHref = "/contact",
  carouselImages = [
    Horse1,
    Horse2,
    Horse3,
  ],
}: BenefitSectionProps) {
  return (
    <section className="bg-[#1A1A1A] py-16 md:py-24 text-white">
      <div className="section-container grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <ScrollReveal variant="fade-left">
          <ImageCarousel images={carouselImages} />
        </ScrollReveal>
        <ScrollReveal variant="fade-right" delay={150}>
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl text-primary md:text-4xl">{title}</h2>
            <p className="leading-relaxed text-white">{description}</p>
            <div>
              <Link href={buttonHref} className="btn-primary">
                {buttonText}
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
