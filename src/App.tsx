import { useState } from "react";
import type { HoverState } from "./types";
import About from "./components/windows/About";
import Freelance from "./components/windows/Freelance";
import School from "./components/windows/School";
import Links from "./components/windows/Links";
import HoverPreview from "./components/HoverPreview";
import Marquee from "./components/Marquee";
import Hobby from "./components/windows/Hobby";
import TechStack from "./components/windows/Techstack";

export default function App() {
  const [hover, setHover] = useState<HoverState>(null);

  const isDesktop = window.matchMedia("(pointer: fine").matches;

  const freelanceHandlers = {
    onMouseMove: isDesktop
      ? (x: number, y: number, image: string, title: string) =>
          setHover({ x, y, image, title })
      : undefined,
    onMouseLeave: isDesktop ? () => setHover(null) : undefined,
  };

  return (
    <div
      className="min-h-screen w-full relative"
      style={{
        background: "#008080",
        fontFamily: "'Fixedsys', 'Courier New', monospace",
        backgroundImage:
          "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.03) 3px, rgba(0,0,0,0.03) 4px)",
      }}
    >
      {/* mobile stacked column */}
      <div className="flex md:hidden flex-col py-16 px-1 gap-4">
        {/* ── About / Notepad ── */}
        <About style={{ width: 320 }} />
        <TechStack style={{ width: 350 }} />
        <Freelance style={{ width: 350 }} handlers={freelanceHandlers} />
        <Hobby style={{ width: 350 }} handlers={freelanceHandlers} />
        <School style={{ width: 350 }} />
        <Links style={{ width: 200 }} />
      </div>

      {/* desktop absolute positioned */}
      <div className="hidden md:block relative" style={{ minHeight: "100vh" }}>
        {/* ── Left column ── */}
        <About
          style={{ position: "absolute", top: 80, left: 20, width: 320 }}
        />
        <TechStack
          style={{ position: "absolute", top: 280, left: 20, width: 320 }}
        />

        {/* ── Right column ── */}
        <Freelance
          handlers={freelanceHandlers}
          style={{ position: "absolute", top: 80, left: 380, width: 380 }}
        />
        <Hobby
          handlers={freelanceHandlers}
          style={{ position: "absolute", top: 220, left: 380, width: 380 }}
        />
        <School
          style={{ position: "absolute", top: 390, left: 380, width: 380 }}
        />
        <Links
          style={{ position: "absolute", top: 550, left: 380, width: 320 }}
        />
      </div>
      <Marquee />
      <HoverPreview hover={hover} />
    </div>
  );
}
