import BenefitBox from "@/components/benefit-box";
import ScrollReveal from "@/components/scroll-reveal";

type Benefit = {
  title: string;
  description: string;
};

type WhyWorkWithUsSectionProps = {
  title?: string;
  benefits?: Benefit[];
};

const defaultBenefits: Benefit[] = [
  { title: "benefit 1", description: "A short description of the benefit." },
  { title: "benefit 2", description: "A short description of the benefit." },
  { title: "benefit 3", description: "A short description of the benefit." },
  { title: "benefit 4", description: "A short description of the benefit." },
];

export default function WhyWorkWithUsSection({
  title = "Why Work With Us",
  benefits = defaultBenefits,
}: WhyWorkWithUsSectionProps) {
  return (
    <section className="bg-surface lg:py-24 py-16">
      <div className="section-container">
        <ScrollReveal variant="fade-up">
          <h2 className="section-title">{title}</h2>
        </ScrollReveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <BenefitBox key={benefit.title} {...benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
