"use client";

import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const esOscuro = document.documentElement.classList.contains("dark");
    setIsDark(esOscuro);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="block w-full text-left text-sm hover:text-blue-500 transition"
    >
      {isDark ? "☀️ Claro" : "🌙 Oscuro"}
    </button>
  );
}
