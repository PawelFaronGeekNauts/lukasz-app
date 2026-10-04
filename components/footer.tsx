import ScrollReveal from "@/components/scroll-reveal";

export default function Footer() {
  return (
    <ScrollReveal variant="fade-in" threshold={0.5} immediate>
      <footer className="bg-[#1A1A1A] py-6 text-center text-sm text-white/80">
        <div className="section-container">
          <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
      </footer>
    </ScrollReveal>
  );
}
