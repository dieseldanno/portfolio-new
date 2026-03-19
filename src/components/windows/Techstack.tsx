import { techstack } from "../../data";
import Inset from "../Inset";
import Window from "../Window";

export default function TechStack({ style }: { style?: React.CSSProperties }) {
  return (
    <Window title="tech_stack.txt" style={style}>
      <div className="flex gap-1 mb-1 text-[11px]">
        {["File", "Edit", "Search", "Help"].map((m) => (
          <span
            key={m}
            className="px-1 hover:bg-[#000080] hover:text-white cursor-default"
          >
            {m}
          </span>
        ))}
      </div>
      <Inset className="p-2 text-[11px] leading-relaxed">
        {Object.entries(techstack).map(([category, items]) => (
          <div key={category} className="mb-2 last:mb-0">
            <p className="font-bold text-[#000080] mb-0.5">{category}:</p>
            <p className="text-[#333]">{items.join(", ")}</p>
          </div>
        ))}
      </Inset>
    </Window>
  );
}
