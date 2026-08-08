import Image from "next/image";

// Canonical logo: assets/source/scott-mason-logo.png
// Do not replace or regenerate this asset.
const LOGO_SRC = "/images/scott-mason-logo.png";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src={LOGO_SRC}
      alt="Scott Mason — Est. 2011"
      width={415}
      height={236}
      priority
      unoptimized
      className={`block h-12 w-[84px] sm:h-16 sm:w-[112px] lg:h-20 lg:w-[141px] ${className}`}
    />
  );
}
