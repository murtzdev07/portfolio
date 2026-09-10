export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden">
      {/* Subtle Developer Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a12_1px,transparent_1px),linear-gradient(to_bottom,#27272a12_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      {/* Constant Low-Transparency Ambient Emerald Glow (Top Left) */}
      <div className="absolute -top-40 -left-40 h-[30rem] w-[30rem] rounded-full bg-emerald-500/10 blur-[150px]"></div>

      {/* Constant Low-Transparency Ambient Cyan Glow (Bottom Right) */}
      <div className="absolute top-1/2 -right-40 h-[35rem] w-[35rem] rounded-full bg-cyan-500/10 blur-[160px]"></div>

      {/* Constant Subtle Center Glow for Depth */}
      <div className="absolute top-1/4 left-1/3 h-[25rem] w-[25rem] rounded-full bg-teal-500/5 blur-[140px]"></div>
    </div>
  );
}