import type { Metadata } from "next";

import "./globals.css";

import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: `${SITE.title} | ${SITE.recipient}`,
  description: "A birthday surprise.",
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