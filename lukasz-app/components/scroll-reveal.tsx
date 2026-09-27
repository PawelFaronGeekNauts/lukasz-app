"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type AnimationVariant =
  | "fade-up"
  | "fade-down"
  | "fade-in"
  | "fade-left"
  | "fade-right"
  | "zoom";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  immediate?: boolean;
};

export default function ScrollReveal({
  children,
  className = "",
  variant = "fade-up",
  delay = 0,
  duration = 700,
  threshold = 0.15,
  once = true,
  immediate = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (immediate) {
      const timer = setTimeout(() => setVisible(true), delay);
      return () => clearTimeout(timer);
    }

    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay, immediate, once, threshold]);

  return (
    <div
      ref={ref}
      className={`reveal reveal-${variant} ${visible ? "reveal-visible" : ""} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: visible ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
}
