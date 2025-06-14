"use client";
import NavBarHeader from "@/components/landing-page/header/NavBarHeader";
import KapsulesHero from "@/components/landing-page/hero/kapsules-hero";
import LandingLayoutShell from "@/components/landing-page/layout/LandingLayoutShell";

export default function HomePage() {
  return (
    <LandingLayoutShell header={<NavBarHeader />} hero={<KapsulesHero />} />
  );
}
