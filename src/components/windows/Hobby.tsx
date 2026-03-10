import { projects } from "../../data";
import type { freelanceHandlers } from "../../types";
import Window from "../Window";
import Inset from "../Inset";
import MenuBar from "../MenuBar";
import ProjectRow from "../ProjectRow";

export default function Hobby({
  style,
  handlers,
}: {
  style?: React.CSSProperties;
  handlers?: freelanceHandlers;
}) {
  return (
    <Window title="hobby_projects" style={style}>
      <MenuBar items={["File", "Edit", "View", "Help"]} />
      <Inset>
        {projects.hobby.map((p) => (
          <ProjectRow key={p.title} {...p} {...handlers} />
        ))}
      </Inset>
      <div className="text-[10px] mt-1 px-1 text-[#444]">
        {projects.hobby.length} object(s) &nbsp;|&nbsp; Fun stuff
      </div>
    </Window>
  );
}
