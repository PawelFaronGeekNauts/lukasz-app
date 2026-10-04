import Link from "next/link";
import LazyImage from "@/components/lazy-image";
import ScrollReveal from "@/components/scroll-reveal";
import horse from "@/public/horse4.jpg"
import Image from "next/image";


type CtaSectionProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  imageSrc?: string;
};

export default function CtaSection({
  title = "A Title to Turn the Visitor Into a Lead",
  description = "This is your chance to emphasize why the visitor should contact you right now.",
  buttonText = "Contact us",
  buttonHref = "/contact",
  imageSrc = "https://equipro.com.pl/wp-content/uploads/2026/09/526x526_11.jpg",
}: CtaSectionProps) {
  return (
    <section className="bg-white py-16 md:py-24 text-white">
      <div className="section-container grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <ScrollReveal variant="fade-left">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl text-primary md:text-4xl">{title}</h2>
            <p className="leading-relaxed text-muted">{description}</p>
            <div>
              <Link href={buttonHref} className="btn-dark">
                {buttonText}
              </Link>
            </div>
          </div>
        </ScrollReveal>
        {horse && (
          <ScrollReveal variant="fade-right" delay={150}>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <Image
                src={horse}
                alt=""
                className="aspect-square w-full object-cover"
              />
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
