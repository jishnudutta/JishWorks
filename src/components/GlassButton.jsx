import { useRef, useState } from "react";

export default function GlassButton({
  children,
  className = "",
  tint = "#3B82F6",
  onClick,
}) {
  const ref = useRef(null);

  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [hover, setHover] = useState(false);

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`
        relative overflow-hidden
        rounded-2xl
        px-7 py-3
        font-medium
        text-white
        backdrop-blur-xl
        border border-white/10
        bg-white/5
        transition-all duration-300
        active:scale-95
        hover:-translate-y-0.5
        ${className}
      `}
      style={{
        boxShadow: `
          0 0 35px ${tint}30,
          inset 0 1px 1px rgba(255,255,255,.12),
          inset 0 -1px 0 rgba(255,255,255,.04)
        `,
      }}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: hover ? 1 : 0,
          background: `radial-gradient(circle at ${pos.x}% ${pos.y}%,
            rgba(255,255,255,.35),
            rgba(255,255,255,.08) 18%,
            transparent 60%)`,
        }}
      />

      {/* Colored border glow */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          boxShadow: `inset 0 0 0 1px ${tint}55`,
        }}
      />

      {/* Bottom shine */}
      <div
        className="absolute left-0 right-0 bottom-0 h-px"
        style={{
          background: `linear-gradient(90deg,
          transparent,
          ${tint},
          transparent)`,
        }}
      />

      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
}