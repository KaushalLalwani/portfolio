import { useState } from "react";

const TECH_STACK = [
  { name: "Python", color: "#3776AB" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "React", color: "#61DAFB" },
  { name: "TensorFlow", color: "#FF6F00" },
  { name: "PyTorch", color: "#EE4C2C" },
  { name: "Node.js", color: "#339933" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Docker", color: "#2496ED" },
  { name: "AWS", color: "#FF9900" },
  { name: "Pandas", color: "#150458" },
  { name: "Scikit-learn", color: "#F7931E" },
  { name: "Next.js", color: "#ffffff" },
  { name: "FastAPI", color: "#009688" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Tableau", color: "#E97627" },
  { name: "Git", color: "#F05032" },
  { name: "Jupyter", color: "#F37626" },
  { name: "Java", color: "#ED8B00" },
  { name: "C++", color: "#00599C" },
  { name: "OpenCV", color: "#5C3EE8" },
];

const ITEMS = [...TECH_STACK, ...TECH_STACK];

export function TechBanner() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="py-12 bg-secondary/20 overflow-hidden border-y border-border relative">
      <div
        className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #0a0a0a, transparent)" }}
      />
      <div
        className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #0a0a0a, transparent)" }}
      />

      <div className="text-center mb-6 px-4">
        <h3 className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
          Tech Stack
        </h3>
      </div>

      <div
        className="flex"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="flex gap-6 whitespace-nowrap"
          style={{
            animation: "techScroll 35s linear infinite",
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {ITEMS.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-card border border-border hover:border-primary transition-all duration-200 cursor-default select-none shrink-0 group"
              style={{
                boxShadow: paused ? `0 0 0 1px ${tech.color}30` : undefined,
              }}
            >
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0 group-hover:scale-125 transition-transform"
                style={{ background: tech.color }}
              />
              <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes techScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
