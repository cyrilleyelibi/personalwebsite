import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";

export const metadata: Metadata = {
  title: "Cyrille Yelibi | Junior Software Engineer",
  description:
    "Junior software engineer capable of scalable problem-solving, eager to learn, familiar with CI/CD and agile. Portfolio and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatbotWidget />
      </body>
    </html>
  );
}
