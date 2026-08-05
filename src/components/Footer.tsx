export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container-site flex flex-col items-center justify-between gap-3 py-8 text-center sm:flex-row sm:text-left">
        <p className="text-[12px] text-white/50">
          © {new Date().getFullYear()} Scott Mason. All rights reserved.
        </p>
        <p className="text-[12px] text-white/50">
          Site design by AMZ{" "}
          <span className="text-white/30" aria-hidden="true">
            ·
          </span>{" "}
          <a
            href="mailto:amz.live@gmail.com"
            className="text-white/50 transition-colors hover:text-[var(--color-accent)]"
          >
            Get in touch
          </a>
        </p>
      </div>
    </footer>
  );
}
