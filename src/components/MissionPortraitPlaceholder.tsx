import Image from "next/image";

const AVATAR_SRC = "/images/scott-avatar.png";

export default function MissionPortraitPlaceholder() {
  return (
    <div
      className="relative flex w-full items-center justify-center overflow-hidden bg-black aspect-[3/2]"
      aria-label="Scott Mason photo placeholder"
      role="img"
    >
      <Image
        src={AVATAR_SRC}
        alt="Scott Mason"
        width={415}
        height={236}
        unoptimized
        className="h-[62%] w-auto max-w-[72%] object-contain"
      />
      <span className="absolute inset-x-0 bottom-3 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-[#3eb4c1]/75 sm:bottom-4">
        Photo coming soon
      </span>
    </div>
  );
}
