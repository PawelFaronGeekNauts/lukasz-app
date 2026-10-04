import ScrollReveal from "@/components/scroll-reveal";

type BenefitBoxProps = {
  title: string;
  description: string;
  index?: number;
};

export default function BenefitBox({
  title,
  description,
  index = 0,
}: BenefitBoxProps) {
  return (
    <ScrollReveal variant="fade-up" delay={index * 100}>
      <article className="rounded-lg border border-border bg-white p-6 text-center shadow-sm">
        <h3 className="mb-3 text-lg uppercase tracking-wide text-primary">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-black">{description}</p>
      </article>
    </ScrollReveal>
  );
}
