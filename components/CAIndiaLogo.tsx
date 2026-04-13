import Image from "next/image";

export default function CAIndiaLogo({ size = 48 }: { size?: number }) {
  return (
    <Image
      src="/images/ca-india-logo.png"
      alt="CA India – ICAI Logo"
      width={size}
      height={size}
      style={{ objectFit: "contain" }}
      priority
    />
  );
}
