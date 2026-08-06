"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "./icons";
import Logo from "./Logo";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "SCOTT'S BOOKS", href: "/books" },
  { label: "SPEAKER", href: "/speaker" },
  { label: "TESTIMONIALS", href: "/testimonials" },
  { label: "DRUG MARCH", href: "/drug-march" },
  { label: "PHOTO GALLERY", href: "/#gallery" },
  { label: "MANAGEMENT", href: "/#management" },
];

const SCROLL_THRESHOLD = 24;

function isNavLinkActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href;
}

function navLinkClassName(isActive: boolean, mobile = false) {
  const base = mobile
    ? "block border-b border-white/10 px-6 py-4 text-[13px] font-semibold tracking-[0.12em] uppercase transition-colors"
    : "whitespace-nowrap text-[10px] font-semibold tracking-[0.12em] uppercase transition-colors xl:text-[11px]";

  return `${base} ${isActive ? "text-accent" : "text-white hover:text-accent"}`;
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-black transition-[box-shadow,border-color] duration-300 ${
        scrolled || menuOpen
          ? "border-b border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.45)]"
          : "border-b border-transparent shadow-none"
      }`}
    >
      <div className="container-site flex h-[var(--site-header-height)] items-center justify-between gap-3">
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
              className={navLinkClassName(
                isNavLinkActive(pathname, link.href),
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link href="/#contact" className="btn-nav hidden sm:inline-flex">
            CONTACT SCOTT
          </Link>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-white/15 text-white transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-navigation"
          className="border-t border-white/10 bg-black lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="max-h-[calc(100dvh-var(--site-header-height))] overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={navLinkClassName(
                  isNavLinkActive(pathname, link.href),
                  true,
                )}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-6 py-5">
              <Link
                href="/#contact"
                className="btn-primary w-full"
                onClick={() => setMenuOpen(false)}
              >
                CONTACT SCOTT
              </Link>
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
