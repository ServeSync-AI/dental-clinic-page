import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "AURA AI | Premium AI-Integrated Cosmetic Dental Clinic",
  description: "Experience the pinnacle of concierge cosmetic dentistry and intelligent dental health. Our premium AI receptionist and advanced clinical systems craft your perfect smile with absolute comfort.",
  keywords: "Cosmetic Dentistry, Luxury Dental Clinic, AI Dental Assistant, Smile Makeover, Concierge Dentistry, Advanced Implants, Dental AI Answering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-brand-cream text-foreground font-sans selection:bg-brand-gold-light selection:text-brand-gold-dark">
        {children}
      </body>
    </html>
  );
}
