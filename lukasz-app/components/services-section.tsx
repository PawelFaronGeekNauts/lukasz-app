import ScrollReveal from "@/components/scroll-reveal";
import ServiceCard from "@/components/service-card";
import Horse4 from "@/public/horse4.jpg";
import Horse1 from "@/public/horse1.jpg";
import Horse2 from "@/public/horse2.jpg";
import Horse5 from "@/public/horse5.jpg";


type Service = {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
};

type ServicesSectionProps = {
  title?: string;
  services?: Service[];
};

const defaultServices: Service[] = [
  {
    title: "Service 1",
    description:
      "A short description of the service and how the visitor will benefit from it.",
    imageSrc:
      Horse4.src,
    href: "/trenings#service1",
  },
  {
    title: "Service 2",
    description:
      "A short description of the service and how the visitor will benefit from it.",
    imageSrc:
      Horse1.src,
    href: "/trenings#service2",
  },
  {
    title: "Service 3",
    description:
      "A short description of the service and how the visitor will benefit from it.",
    imageSrc:
      Horse2.src,
    href: "/online-trenings#service3",
  },
  {
    title: "Service 4",
    description:
      "A short description of the service and how the visitor will benefit from it.",
    imageSrc:
      Horse5.src,
    href: "/webinars#service4",
  },
];

export default function ServicesSection({
  title = "Our Services",
  services = defaultServices,
}: ServicesSectionProps) {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="section-container">
        <ScrollReveal variant="fade-up">
          <h2 className="section-title">{title}</h2>
        </ScrollReveal>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
