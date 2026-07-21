import { useState, useEffect } from "react";
import { Palette, Check } from "lucide-react";

const THEMES = [
  { id: "sapphire", name: "Sapphire Blue", bgClass: "from-blue-600 to-cyan-500" },
  { id: "emerald", name: "Emerald Teal", bgClass: "from-emerald-500 to-teal-400" },
  { id: "violet", name: "Violet Electric", bgClass: "from-purple-600 to-pink-500" },
];

function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("portfolio-theme") || "sapphire";
    }
    return "sapphire";
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (currentTheme === "sapphire") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", currentTheme);
    }
    localStorage.setItem("portfolio-theme", currentTheme);
  }, [currentTheme]);

  const selectTheme = (themeId) => {
    setCurrentTheme(themeId);
    setOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Drawer Popover */}
      {open && (
        <div className="mb-3 p-4 rounded-2xl glass-card border border-slate-700/80 shadow-2xl space-y-3 animate-fadeIn min-w-[200px]">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Accent Theme
            </span>
            <Palette size={14} className="text-cyan-400" />
          </div>

          <div className="space-y-1.5">
            {THEMES.map((theme) => {
              const active = currentTheme === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => selectTheme(theme.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition ${
                    active
                      ? "bg-slate-800 text-white border border-slate-700"
                      : "text-slate-400 hover:bg-slate-800/60 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-3.5 h-3.5 rounded-full bg-gradient-to-tr ${theme.bgClass} shadow-sm`}
                    ></span>
                    <span>{theme.name}</span>
                  </div>
                  {active && <Check size={14} className="text-cyan-400" />}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="p-3.5 rounded-full glass-card hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 shadow-xl shadow-blue-950/40 hover:scale-105 transition-all duration-300 flex items-center justify-center group"
        aria-label="Theme Customizer"
        title="Customize Theme Palette"
      >
        <Palette size={20} className="group-hover:rotate-45 transition-transform text-cyan-400" />
      </button>
    </div>
  );
}

export default ThemeSwitcher;
