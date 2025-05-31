"use client";
import Navs from "@/components/Navs";
import AboutMe from "@/components/page/AboutMe";
import { useRef } from "react";
export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={containerRef}
      className="h-screen relative bg-black select-none"
      style={{ scrollBehavior: "smooth" }}
    >
      <Navs />
      <AboutMe />
    </div>
  );
}
