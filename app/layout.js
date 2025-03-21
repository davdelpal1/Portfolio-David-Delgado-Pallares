import "./globals.css";

export const metadata = {
  title: "Mi Portfolio",
  description: "Portfolio personal de David Delgado",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
