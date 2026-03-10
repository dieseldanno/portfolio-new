export default function Inset({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-white ${className}`}
      style={{
        border: "2px solid",
        borderColor: "#808080 #ffffff #ffffff #808080",
        boxShadow: "inset 1px 1px 0 #000",
      }}
    >
      {children}
    </div>
  );
}
