import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Button from "./components/Button";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sabri Helpage",
  description: "Sabri Helpage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
        <div className="fixed bottom-6 right-6 z-50"><Button label="Donate Us!" boxShadow={'none'}/></div>
        <Footer />
      </body>
    </html>
  );
}
