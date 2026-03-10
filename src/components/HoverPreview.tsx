import type { HoverState } from "../types";

export default function HoverPreview({ hover }: { hover: HoverState }) {
  if (!hover) return null;
  return (
    <div
      className="fixed pointer-events-none z-50"
      style={{ top: hover.y + 16, left: hover.x + 16 }}
    >
      <img
        src={hover.image}
        alt={`Image for ${hover.title}`}
        className="w-100 h-100 object-cover"
        style={{
          border: "2px solid",
          borderColor: "#ffffff #808080 #808080 #ffffff",
          boxShadow: "2px 2px 0 #000",
        }}
      />
    </div>
  );
}
