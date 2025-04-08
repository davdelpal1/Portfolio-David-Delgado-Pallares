import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Mi Portfolio",
  description: "Portfolio personal de David Delgado",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors">
        <Navbar /> {/* 👈 Navbar insertado aquí */}
        {children}
      </body>
    </html>
  );
}
