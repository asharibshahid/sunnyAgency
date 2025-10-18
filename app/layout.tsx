import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import   FuturisticNavbar from "./components/navbar"
import CustomCursor from "./customCursor";
import ExtremeFooter from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sunny Agency",
  description: "A modern digital agency We provide Solution not Service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CustomCursor />
        <FuturisticNavbar />
        {children}
        <ExtremeFooter />
      </body>
    </html>
  );
}