export default function Win95Button({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`px-3 py-0.5 text-xs bg-[#c0c0c0] active:translate-x-px active:translate-y-px ${className}`}
      style={{
        fontFamily: "'Fixedsys', 'Courier New', monospace",
        border: "2px solid",
        borderColor: "#ffffff #808080 #808080 #ffffff",
        boxShadow: "inset -1px -1px 0 #000, inset 1px 1px 0 #dfdfdf",
      }}
    >
      {children}
    </button>
  );
}
