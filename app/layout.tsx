```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bruna Batista | Psicologia · TCC",
  description:
    "Bruna Batista — Psicóloga. Atendimento em Psicologia com abordagem da Terapia Cognitivo-Comportamental.",
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
```
