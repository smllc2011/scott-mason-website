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
      className={`h-16 w-auto sm:h-[4.25rem] lg:h-20 ${className}`}
    />
  );
}
