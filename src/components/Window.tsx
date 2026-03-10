import TitleBar from "./TitleBar";

export default function Window({
  title,
  children,
  style,
  active = true,
}: {
  title: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  active?: boolean;
}) {
  return (
    <div
      className=" bg-[#c0c0c0] p-0.5"
      style={{
        border: "2px solid",
        borderColor: "#ffffff #808080 #808080 #ffffff",
        boxShadow: "2px 2px 0 #000000",
        ...style,
      }}
    >
      <TitleBar title={title} active={active} />
      <div className="px-2 pb-2 pt-1">{children}</div>
    </div>
  );
}
