import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

// Importando o SmoothScrolling
import SmoothScrolling from "@/components/animations/SmoothScrolling";

const nohemi = localFont({
  src: [
    {
      path: "../fonts/Nohemi-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Nohemi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Nohemi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Nohemi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-nohemi", // cria uma CSS variable para usar no tailwind ou CSS
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web Designer - Edson Junior",
  description: "Criação e desenvolvimento de sites profissionais",
  icons: {
    icon: "/favicon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${nohemi.variable} ${geistMono.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
