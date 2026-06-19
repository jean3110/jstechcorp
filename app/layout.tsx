import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JS Tech Corp — AI Systems for Local Businesses",
  description: "We build AI-powered booking systems, professional websites, and Google review automation for local service businesses. Starting at $299.",
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
      <body className={`${inter.className} min-h-full bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
