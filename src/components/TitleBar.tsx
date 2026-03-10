export default function TitleBar({
  title,
  active = true,
}: {
  title: string;
  active?: boolean;
}) {
  return (
    <div
      className="flex items-center justify-between px-2 py-0.5 select-none mb-1"
      style={{
        background: active
          ? "linear-gradient(to right, #000080, #1084d0)"
          : "#808080",
      }}
    >
      <span
        className="text-white text-xs font-bold"
        style={{ fontFamily: "'Fixedsys', monospace" }}
      >
        {title}
      </span>
      <div className="flex gap-0.5">
        {["_", "□", "✕"].map((s) => (
          <button
            key={s}
            className="w-4 h-3.5 text-[9px] bg-[#c0c0c0] leading-none flex items-center justify-center"
            style={{
              border: "1px solid",
              borderColor: "#ffffff #808080 #808080 #ffffff",
              fontFamily: "monospace",
            }}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
