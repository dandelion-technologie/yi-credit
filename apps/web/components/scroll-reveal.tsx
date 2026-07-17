"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    document.documentElement.classList.add("yi-reveal-ready");

    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return () => document.documentElement.classList.remove("yi-reveal-ready");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.16
      }
    );

    nodes.forEach((node) => observer.observe(node));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("yi-reveal-ready");
    };
  }, []);

  return null;
}
