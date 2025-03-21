"use client"; // 👈 Esto indica que es un Client Component

import { useState, useEffect } from "react";

export default function ThemeSwitcher() {
  const [modoOscuro, setModoOscuro] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", modoOscuro);
  }, [modoOscuro]);

  return (
    <div className="p-4 text-right">
      <button
        onClick={() => setModoOscuro(!modoOscuro)}
        className="px-4 py-2 border rounded hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        {modoOscuro ? "☀️ Claro" : "🌙 Oscuro"}
      </button>
    </div>
  );
}
