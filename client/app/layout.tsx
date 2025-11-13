import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Instrument_Serif} from "next/font/google";
import "./globals.css";
import Navbar from "@/component/layout/navbar";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
})

export const metadata: Metadata = {
  title: "INSPIRE — Discover Websites That Inspire Creativity",
  description:
    "Discover the best developer portfolios, design ideas, and tools — curated for developers who think visually.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetBrainsMono.variable} ${instrumentSerif.variable} antialiased`}>
      <body
        className="font-sans antialiased bg-white text-neutral-900"
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
