import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";
import Link from "next/link";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  profile,
}: Readonly<{
  children: React.ReactNode
  profile: React.ReactNode
}>) {
  const isAdmin = true
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <nav>
            <ul className="flex gap-2 justify-between px-4 bg-blue-700">
              <li>
                <Link href = {"/"}>Home</Link>
              </li>
              <li> 
                <Link href = {"/about"}>About</Link>
              </li>
            </ul>
          </nav>
        {children}
        {isAdmin && profile}
      </body>
    </html>
  );
}
