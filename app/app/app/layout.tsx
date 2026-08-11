import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bruna Batista | Psicóloga",
  description: "Atendimento psicológico com acolhimento, escuta e cuidado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
