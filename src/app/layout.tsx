import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Career Portfolio",
  description: "Career Portfolio of E-Jhay Esplana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
