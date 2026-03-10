export default function MenuBar({ items }: { items: string[] }) {
  return (
    <div className="flex gap-1 mb-1 text-[11px]">
      {items.map((m) => (
        <span
          key={m}
          className="px-1 hover:bg-[#000080] hover:text-white cursor-default"
        >
          {m}
        </span>
      ))}
    </div>
  );
}
