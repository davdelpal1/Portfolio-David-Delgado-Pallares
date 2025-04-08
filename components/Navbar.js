"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Inicio", href: "/" },
    { name: "Sobre mí", href: "#about" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "mailto:delgado.pallares.david@gmail.com" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
          David Delgado
        </Link>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-gray-700 dark:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menú escritorio */}
        <nav className="hidden md:flex gap-6 items-center text-sm font-medium text-gray-700 dark:text-white">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-blue-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <ThemeSwitcher />
        </nav>
      </div>

      {/* Menú móvil estilo Diego */}
      {menuOpen && (
        <div className="absolute top-16 right-4 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-50 p-2">
          <nav className="flex flex-col text-sm text-gray-800 dark:text-white">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                {link.name}
              </Link>
            ))}
            <div className="px-4 py-2">
              <ThemeSwitcher />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
