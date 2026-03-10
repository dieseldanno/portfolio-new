import { useEffect, useRef } from "react";
import gsap from "gsap";

const email = "danno.tharmarajah@gmail.com";
const message = `★ say hi! → ${email}  ★  looking for internship nov 9th - april 23rd  ★  available for freelance work  ★  based in Stockholm  ★  `;

export default function Marquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const container = containerRef.current;
    if (!track || !container) return;

    const tl = gsap.timeline({ repeat: -1 });

    tl.fromTo(
      track,
      { x: container.offsetWidth },
      { x: -track.offsetWidth, duration: 35, ease: "none" },
    );

    // pause on hover
    const pause = () => tl.pause();
    const play = () => tl.play();
    container.addEventListener("mouseenter", pause);
    container.addEventListener("mouseleave", play);

    return () => {
      container.removeEventListener("mouseenter", pause);
      container.removeEventListener("mouseleave", play);
      tl.kill();
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 overflow-hidden"
      style={{
        background: "#c0c0c0",
        borderTop: "2px solid",
        borderColor: "#ffffff #808080 #808080 #ffffff",
        boxShadow: "inset 0 1px 0 #dfdfdf",
        height: 28,
        zIndex: 50,
      }}
    >
      <div
        ref={containerRef}
        className="mx-2 my-1 overflow-hidden relative"
        style={{
          border: "2px solid",
          borderColor: "#808080 #ffffff #ffffff #808080",
          background: "#000080",
          height: 18,
        }}
      >
        <a
          ref={trackRef}
          href={`mailto:${email}`}
          className="absolute whitespace-nowrap text-white text-[11px] leading-none flex items-center h-full hover:text-yellow-300 transition-colors"
          style={{ fontFamily: "'Fixedsys', 'Courier New', monospace" }}
        >
          {message}
        </a>
      </div>
    </div>
  );
}
