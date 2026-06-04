import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Geovana Mendes | Desenvolvedora e Arquitetura de Soluções",
  description:
    "Portfólio profissional de Geovana Mendes, com projetos em desenvolvimento web, backend, automação, integrações, arquitetura de soluções e tecnologia aplicada a negócios.",
  keywords: [
    "Geovana Mendes",
    "Desenvolvedora C#",
    "Desenvolvedora .NET",
    "Backend",
    "Next.js",
    "React",
    "Arquitetura de Software",
    "Automação",
    "Integrações",
    "IA",
  ],
  authors: [{ name: "Geovana Mendes" }],
  creator: "Geovana Mendes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}