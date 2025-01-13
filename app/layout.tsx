import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientProvider from "@/components/ClientProvider";

export const metadata: Metadata = {
  title: "BRL Mining",
  description: "Breakthrough Resources Ltd",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <ClientProvider>
          <Navbar />
          {children}
          <Footer />
        </ClientProvider>
      </body>
    </html>
  );
}
