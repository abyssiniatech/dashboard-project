"use client";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center gap-2 p-2 rounded bg-slate-800 hover:bg-slate-700"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
      Toggle
    </button>
  );
}