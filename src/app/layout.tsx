import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Notification from "./components/Notification";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Appetitoso",
  description: "Italian restaurant in NY! We have delicious food!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Notification />
        <Navbar />
        {children}
        <ToastContainer position="bottom-right" />
        <Footer />
      </body>
    </html>
  );
}
