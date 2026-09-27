import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/scroll-reveal";

type ServiceCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
  buttonText?: string;
  index?: number;
};

export default function ServiceCard({
  title,
  description,
  imageSrc,
  href,
  buttonText = "Learn More",
  index = 0,
}: ServiceCardProps) {
  return (
    <ScrollReveal variant="fade-up" delay={index * 120}>
      <article className="flex flex-col items-center text-center">
        <Link
          href={href}
          className="mb-4 block w-full overflow-hidden rounded-lg shadow-md"
        >
         <Image src={imageSrc} alt="Hero Image" className="aspect-square w-full object-cover" priority width={100} height={100} />
        </Link>
        <h3 className="mb-2 text-xl text-primary">
          <Link href={href} className="hover:text-accent">
            {title}
          </Link>
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
          {description}
        </p>
        <Link href={href} className="btn-outline text-xs">
          {buttonText}
        </Link>
      </article>
    </ScrollReveal>
  );
}
