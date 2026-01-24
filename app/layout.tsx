import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/_components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Web design in Port Harcourt, SEO in Port Harcourt",
  description:
    "We focus on our client's satisd=faction as rfegards web design and web app development in Port Harcourt",
  keywords:
    "website design Port Harcourt,web design company Port Harcourt,website developers in Port Harcourt,affordable web design Port Harcourt,ecommerce website design Port Harcourt,responsive web design Port Harcourt,professional website design Port Harcourt,best web design agency Port Harcourt,business website design Port Harcourt",
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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
