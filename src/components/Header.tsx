"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const navLinks = [
  { label: "HOME", href: "/", active: true },
  { label: "ABOUT", href: "#about" },
  { label: "SCOTT'S BOOKS", href: "#books" },
  { label: "SPEAKER", href: "#speaker" },
  { label: "TESTIMONIALS", href: "#testimonials" },
  { label: "DRUG MARCH", href: "#drug-march" },
  { label: "PHOTO GALLERY", href: "#gallery" },
  { label: "MANAGEMENT", href: "#management" },
];

const SCROLL_THRESHOLD = 24;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-black transition-[box-shadow,border-color] duration-300 ${
        scrolled
          ? "border-b border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.45)]"
          : "border-b border-transparent shadow-none"
      }`}
    >
      <div className="container-site flex h-[80px] items-center justify-between gap-4 lg:h-[88px]">
        <Link href="/" className="shrink-0" aria-label="Scott Mason home">
          <Logo />
        </Link>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-4 lg:flex xl:gap-6"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`whitespace-nowrap text-[10px] font-semibold tracking-[0.12em] uppercase transition-colors hover:text-accent xl:text-[11px] ${
                link.active ? "text-accent" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="#contact" className="btn-nav shrink-0">
          CONTACT SCOTT
        </Link>
      </div>
    </header>
  );
}
