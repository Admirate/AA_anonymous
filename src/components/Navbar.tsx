"use client";

import { usePathname } from "next/navigation";
import PillNav from "./PillNav";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <PillNav
      logo="/aa_logo.png"
      logoAlt="AAIRAW Logo"
      items={[
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
      ]}
      activeHref={pathname}
      ease="power2.easeOut"
      baseColor="#000000"
      pillColor="#ffffff"
      hoveredPillTextColor="#ffffff"
      pillTextColor="#000000"
      initialLoadAnimation={false}
    />
  );
}
