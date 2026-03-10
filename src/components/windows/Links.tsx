import { links } from "../../data";
import Window from "../Window";
import Win95Button from "../Win95Button";

export default function Links({ style }: { style?: React.CSSProperties }) {
  return (
    <Window title="links.lnk" style={style}>
      <div className="flex flex-col gap-1">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Win95Button className="w-full text-left flex items-center gap-2">
              <span>{l.icon}</span>
              <span>{l.label}</span>
            </Win95Button>
          </a>
        ))}
      </div>
    </Window>
  );
}
