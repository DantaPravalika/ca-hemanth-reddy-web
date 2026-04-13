"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProfilePhoto({ size = 80 }: { size?: number }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        style={{ width: size, height: size }}
        className="rounded-full bg-[#1e3a5f] flex items-center justify-center border-2 border-[#0891b2] flex-shrink-0"
      >
        <span className="text-white font-bold text-xl">HR</span>
      </div>
    );
  }

  return (
    <div
      style={{ width: size, height: size }}
      className="rounded-full overflow-hidden border-2 border-[#0891b2] flex-shrink-0 relative"
    >
      <Image
        src="/images/profile.jpeg"
        alt="CA Hemanth Reddy Danta"
        width={size}
        height={size}
        className="object-cover w-full h-full"
        onError={() => setError(true)}
        unoptimized
      />
    </div>
  );
}
