import type { Metadata } from "next";
import { Chivo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const chivo = Chivo({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-chivo",
});

export const metadata: Metadata = {
  title: "AA Website",
  description: "A static two-page website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${chivo.variable} font-sans antialiased`}>
        <div className="relative">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
