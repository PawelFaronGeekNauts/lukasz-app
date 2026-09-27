import LazyImage from "@/components/lazy-image";
import ScrollReveal from "@/components/scroll-reveal";
import Image, { StaticImageData } from "next/image";

type TestimonialCardProps = {
  content: string;
  clientName: string;
  imageSrc: StaticImageData;
  index?: number;
};

export default function TestimonialCard({
  content,
  clientName,
  imageSrc,
  index = 0,
}: TestimonialCardProps) {
  return (
    <ScrollReveal variant="fade-up" delay={index * 120}>
      <blockquote className="flex h-full flex-col rounded-lg border border-border bg-white p-6 shadow-sm">
        <p className="mb-6 flex-1 text-sm italic leading-relaxed text-muted">
          &ldquo;{content}&rdquo;
        </p>
        <footer className="flex items-center gap-3 border-t border-border pt-4">
          <Image
            src={imageSrc}
            alt={clientName}
            className="h-12 w-12 rounded-full object-cover"
          />
          <cite className="text-sm font-medium not-italic text-primary">
            {clientName}
          </cite>
        </footer>
      </blockquote>
    </ScrollReveal>
  );
}
