export default function ProjectRow({
  title,
  desc,
  year,
  url,
  image,
  onMouseMove,
  onMouseLeave,
}: {
  title: string;
  desc: string;
  year: string;
  url?: string;
  image?: string;
  onMouseMove?: (x: number, y: number, image: string, title: string) => void;
  onMouseLeave?: () => void;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={(e) =>
        onMouseMove?.(e.clientX, e.clientY, image || "", title || "")
      }
      onMouseLeave={() => onMouseLeave?.()}
    >
      <div
        className="flex items-center gap-2 px-2 py-1 text-xs cursor-default select-none hover:bg-[#000080] hover:text-white group"
        style={{ fontFamily: "'Fixedsys', 'Courier New', monospace" }}
      >
        <span className="shrink-0 text-sm">📁</span>
        <span className="font-bold truncate flex-1">{title}</span>
        <span className="text-[10px] opacity-60 group-hover:opacity-100 shrink-0 ">
          {desc}
        </span>
        <span className="text-[10px] opacity-50 group-hover:opacity-80 shrink-0 ml-2">
          {year}
        </span>
      </div>
    </a>
  );
}
