import type { Metadata } from "next";
import { Inter, Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import ChatWidget from "./ChatWidget";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["600", "700", "800", "900"],
  display: "swap",
});
const ibmMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JS Tech Corp — AI Systems for Local Businesses",
  description:
    "The call you miss is the customer your competitor keeps. We build an AI that answers, quotes, and books your customers 24/7. Live in 5–7 days, from $299.",
  icons: {
    icon: "/favicon.svg",
    apple: "/logo-icon.svg",
  },
  openGraph: {
    title: "JS Tech Corp — AI Systems for Local Businesses",
    description: "Stop losing customers to slow replies. We build AI that books appointments 24/7.",
    type: "website",
    locale: "en_US",
    siteName: "JS Tech Corp",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.variable} ${archivo.variable} ${ibmMono.variable} min-h-full antialiased`}>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
