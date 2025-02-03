import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ui/theme-provider";
import localFont from "next/font/local";
import Navbar from "@/components/custom/navbar-top";
import AI from "@/components/custom/ai-helper";
import { Inter } from 'next/font/google'; // Importing the font using Next.js font optimization
import "./globals.css";
import React from "react";


const inter = Inter({ subsets: ['latin'] }); // Use the imported font

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
  title: "Nate Rosenberg",
  description: "A personal website and portfolio for Nathan (Nate) Rosenberg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Nate Rosenberg</title>
        <link
            href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
            rel="stylesheet"
          />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased ${inter.className} bg-grid bg-fixed bg-center font-sans bg-secondary text-primary`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar/>
          <div className='w-[5%] h-[10%] absolute pb-4 bottom-0 right-0 z-10'>
            <AI/>
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
