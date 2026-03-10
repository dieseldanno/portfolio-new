import Window from "../Window";
import Inset from "../Inset";
import MenuBar from "../MenuBar";

export default function About({ style }: { style?: React.CSSProperties }) {
  return (
    <Window title="about.txt" style={style}>
      <MenuBar items={["File", "Edit", "Search", "Help"]} />
      <Inset className="p-2 text-xs leading-5 min-h-20">
        <p className="font-bold">Danno Tharmarajah</p>
        <p className="text-[#333] mt-1">
          Web developer based in Stockholm.
          <br />
          I build clean interfaces and
          <br />
          occasionally make people dance.
        </p>
      </Inset>
    </Window>
  );
}
