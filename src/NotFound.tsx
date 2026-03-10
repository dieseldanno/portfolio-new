import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center"
      style={{
        background: "#008080",
        fontFamily: "'Fixedsys', 'Courier New', monospace",
        backgroundImage:
          "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.03) 3px, rgba(0,0,0,0.03) 4px)",
      }}
    >
      {/* error dialog window */}
      <div
        className="bg-[#c0c0c0] p-0.5 w-80"
        style={{
          border: "2px solid",
          borderColor: "#ffffff #808080 #808080 #ffffff",
          boxShadow: "2px 2px 0 #000000",
        }}
      >
        <div
          className="flex items-center justify-between px-2 py-0.5 select-none mb-1"
          style={{ background: "linear-gradient(to right, #000080, #1084d0)" }}
        >
          <span className="text-white text-xs font-bold">Error</span>
          <button
            className="w-4 h-3.5 text-[9px] bg-[#c0c0c0] leading-none flex items-center justify-center"
            style={{
              border: "1px solid",
              borderColor: "#ffffff #808080 #808080 #ffffff",
            }}
          >
            ✕
          </button>
        </div>

        <div className="px-3 py-3 flex gap-3 items-start">
          <div
            className="shrink-0 w-8 h-8 flex items-center justify-center text-xl"
            style={{
              border: "2px solid",
              borderColor: "#808080 #ffffff #ffffff #808080",
              background: "white",
            }}
          >
            🚫
          </div>

          <div className="text-xs leading-5">
            <p className="font-bold mb-1">Page Not Found</p>
            <p className="text-[#333]">This page does not exist.</p>
            <p className="text-[#333]">
              Error code: <strong>404</strong>
            </p>
          </div>
        </div>

        <div
          className="mx-2 mb-2"
          style={{
            borderTop: "1px solid #808080",
            borderBottom: "1px solid #fff",
          }}
        />

        <div className="flex justify-center gap-2 px-3 pb-3">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-0.5 text-xs bg-[#c0c0c0] min-w-20"
            style={{
              border: "2px solid",
              borderColor: "#ffffff #808080 #808080 #ffffff",
              boxShadow: "inset -1px -1px 0 #000, inset 1px 1px 0 #dfdfdf",
            }}
          >
            OK
          </button>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-0.5 text-xs bg-[#c0c0c0] min-w-20"
            style={{
              border: "2px solid",
              borderColor: "#ffffff #808080 #808080 #ffffff",
              boxShadow: "inset -1px -1px 0 #000, inset 1px 1px 0 #dfdfdf",
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
