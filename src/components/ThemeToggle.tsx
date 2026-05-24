"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") {
      const id = window.setTimeout(() => setTheme(stored), 0);
      return () => window.clearTimeout(id);
    }
  }, []);

  const applyTheme = (t: "light" | "dark" | "system") => {
    setTheme(t);
    if (t === "system") {
      localStorage.removeItem("theme");
      document.documentElement.removeAttribute("data-theme");
    } else {
      localStorage.setItem("theme", t);
      document.documentElement.setAttribute("data-theme", t);
    }
  };

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    applyTheme(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label="ダーク/ライトモード切替"
      className="p-2 rounded-md hover:bg-card-border/50 transition-colors"
      title={theme === "dark" ? "ライトモード" : "ダークモード"}
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
