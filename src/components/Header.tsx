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
  { label: "CONTACT", href: "/contact" },
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
    ? "block border-b border-white/10 px-6 py-4 text-[14px] font-semibold tracking-[0.1em] uppercase transition-colors"
    : "whitespace-nowrap text-[11px] font-semibold tracking-[0.1em] uppercase transition-colors lg:text-[12px] xl:text-[13px]";

  return `${base} ${isActive ? "text-accent" : "text-white hover:text-accent"}`;
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const currentPageLabel =
    navLinks.find((link) => isNavLinkActive(pathname, link.href))?.label ??
    null;

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
      <div className="container-site grid h-[var(--site-header-height)] grid-cols-[minmax(7.5rem,auto)_1fr_minmax(7.5rem,auto)] items-center gap-3 sm:grid-cols-[minmax(8.5rem,auto)_1fr_minmax(8.5rem,auto)] lg:grid-cols-[minmax(9.5rem,auto)_1fr_minmax(9.5rem,auto)]">
        <Link
          href="/"
          className="flex shrink-0 items-center justify-self-start"
          aria-label="Scott Mason home"
        >
          <Logo />
        </Link>

        <nav
          className="col-start-2 hidden min-w-0 items-center justify-center justify-self-center gap-4 lg:flex xl:gap-6"
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

        <div className="col-start-3 flex min-w-0 shrink-0 items-center justify-end justify-self-end gap-2.5 sm:gap-3">
          {currentPageLabel ? (
            <span className="truncate text-right text-[11px] font-semibold tracking-[0.12em] text-accent uppercase sm:text-[12px] lg:hidden">
              {currentPageLabel}
            </span>
          ) : null}

          <Link href="/contact" className="btn-nav hidden sm:inline-flex">
            BOOK SCOTT
          </Link>

          <button
            type="button"
            className="inline-flex size-10 shrink-0 items-center justify-center border border-white/20 text-white transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] sm:size-11 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <CloseIcon className="block size-5" />
            ) : (
              <MenuIcon className="block size-5" />
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
                href="/contact"
                className="btn-primary w-full"
                onClick={() => setMenuOpen(false)}
              >
                BOOK SCOTT
              </Link>
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
