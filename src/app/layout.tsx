import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import { ThemeProvider } from "next-themes";

// Fonts are server-safe
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// ✅ Server metadata
export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Professional admin dashboard built with Next.js, TS, and Tailwind",
};

// ✅ RootLayout is now a server component
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-white dark:bg-slate-900 text-black dark:text-white">
        <ThemeProvider attribute="class">
          <div className="flex min-h-screen">
            <Sidebar /> {/* Sidebar.tsx has "use client" */}
            <div className="flex-1 flex flex-col">
              <Header /> {/* Header.tsx has "use client" */}
              <main className="p-6 flex-1">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}