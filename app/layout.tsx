import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mango - Cambio de artículo",
  description: "Selecciona un artículo para tu cambio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased bg-white text-black">
        {children}
      </body>
    </html>
  );
}
