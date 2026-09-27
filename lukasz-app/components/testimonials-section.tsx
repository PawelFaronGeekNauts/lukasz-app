import ScrollReveal from "@/components/scroll-reveal";
import TestimonialCard from "@/components/testimonial-card";
import client from "@/public/client.jpg"
import { StaticImageData } from "next/image";


type Testimonial = {
  content: string;
  clientName: string;
  imageSrc: StaticImageData;
};

type TestimonialsSectionProps = {
  title?: string;
  testimonials?: Testimonial[];
};

const defaultTestimonials: Testimonial[] = [
  {
    content:
      "A testimonial from a client who benefited from your product or service. Testimonials can be a highly effective way of establishing credibility and increasing your company's reputation.",
    clientName: "Client Name",
    imageSrc: client,
  },
  {
    content:
      "A testimonial from a client who benefited from your product or service. Testimonials can be a highly effective way of establishing credibility and increasing your company's reputation.",
    clientName: "Client Name",
    imageSrc: client,
  },
  {
    content:
      "A testimonial from a client who benefited from your product or service. Testimonials can be a highly effective way of establishing credibility and increasing your company's reputation.",
    clientName: "Client Name",
    imageSrc: client,
  },
];

export default function TestimonialsSection({
  title = "Client Testimonials",
  testimonials = defaultTestimonials,
}: TestimonialsSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="section-container">
        <ScrollReveal variant="fade-up">
          <h2 className="section-title">{title}</h2>
        </ScrollReveal>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
