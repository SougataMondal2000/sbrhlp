import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Link from "next/link";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "NGO India | Charity in India | Elderly or senior care, non – profit organisation – sabri helpage.",
  description:
    "Sabri Helpage – An NGO in India working for elderly care, children and women welfare and Mental Health Care Awareness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <div className="fixed bottom-6 right-6 z-50">
          <Link href="/donate-us">
            <Button label="Donate Us!" boxShadow={"none"} />
          </Link>
        </div>
        <Footer />
      </body>
    </html>
  );
}
