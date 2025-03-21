import "./globals.css";
import { useState, useEffect } from "react";

export const metadata = {
  title: "Mi Portfolio",
  description: "Portfolio personal de David Delgado",
};

export default function RootLayout({ children }) {
  const [modoOscuro, setModoOscuro] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", modoOscuro);
  }, [modoOscuro]);

  return (
    <html lang="es">
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors">
        <div className="p-4 text-right">
          <button
            onClick={() => setModoOscuro(!modoOscuro)}
            className="px-4 py-2 border rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {modoOscuro ? "☀️ Claro" : "🌙 Oscuro"}
          </button>
        </div>
        {children}
      </body>
    </html>
  );
}
