import type { AppProps } from "next/app";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ChatbotWidget from "../components/ChatbotWidget";
import "../app/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Cyrille Yelibi | Junior Software Engineer</title>
        <meta name="description" content="Junior software engineer capable of scalable problem-solving, eager to learn, familiar with CI/CD and agile." />
      </Head>
      <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">
        <Component {...pageProps} />
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
    </>
  );
}
