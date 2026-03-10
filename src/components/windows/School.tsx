import { projects } from "../../data";
import Window from "../Window";
import MenuBar from "../MenuBar";
import Inset from "../Inset";
import ProjectRow from "../ProjectRow";

export default function School({ style }: { style?: React.CSSProperties }) {
  return (
    <Window title="school_projects" style={style} active={false}>
      <MenuBar items={["File", "Edit", "View", "Help"]} />
      <Inset>
        {projects.school.map((p) => (
          <ProjectRow key={p.title} {...p} />
        ))}
      </Inset>
      <div className="text-[10px] mt-1 px-1 text-[#444]">
        {projects.school.length} object(s) &nbsp;|&nbsp; Academic
      </div>
    </Window>
  );
}
