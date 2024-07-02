import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "All digital Store",
  description:
    "Welcome to All Digital Store, the ultimate destination for all your digital needs! Whether you are looking for the latest operating systems, robust antivirus programs, or digital products like Netflix and IPTV accounts, we have got you covered. Our platform offers a seamless shopping experience, ensuring that you find exactly what you need with ease.",
    icons: {
      icon: "/logo.png",
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "w-full h-full font-sans")}>
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
