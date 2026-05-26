import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Slyte AI — The Content OS for Modern Teams",
  description:
    "Slyte AI is the AI-powered content operating system that helps ambitious brands plan, create, and distribute content at scale. 10x your output without 10x the headcount.",
  keywords: ["content AI", "content marketing", "AI writing", "content strategy", "content OS"],
  openGraph: {
    title: "Slyte AI — The Content OS for Modern Teams",
    description:
      "Plan, create, and distribute content at scale with AI. Built for teams that take content seriously.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("dark", geistSans.variable, geistMono.variable)}>
      <body className="antialiased min-h-screen bg-background text-foreground font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
