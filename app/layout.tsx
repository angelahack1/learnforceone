import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BootstrapClient from "./bootstrap-client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LearnForceOne Angys app",
  description: "LearnForceOne Angys app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}