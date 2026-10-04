"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import Logo from "@/public/logo.png";

const navLinks = [
  { href: "/about-me", label: "O mnie" },
  { href: "/trenings", label: "Treningi" },
  { href: "/online-trenings", label: "Trenuj on-line" },
  { href: "/trenings", label: "Szkolenia" },
  { href: "/webinars", label: "Webinary" },
  { href: "/contact", label: "Kontakt" },
];

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const updateHeight = () => {
      document.documentElement.style.setProperty(
        "--header-height",
        `${header.getBoundingClientRect().height}px`,
      );
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(header);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed left-0 right-0 top-0 z-50 bg-white shadow-sm"
    >
      <Link href="/" className="block ">
        <img
          src={Logo.src}
          alt="Cholewicka EquiPro"
          className="block h-auto w-full"
        />
      </Link>

      <nav className="bg-[#1A1A1A]">
        <ul className="section-container flex flex-wrap items-center justify-center gap-x-1 gap-y-1 py-3 md:gap-x-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="block px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-white transition-colors hover:text-surface md:text-sm"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}