import Image from "next/image";

type AssetIconProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function AssetIcon({
  src,
  alt,
  className = "h-14 w-14",
}: AssetIconProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={72}
      height={72}
      className={`shrink-0 object-contain ${className}`}
    />
  );
}
