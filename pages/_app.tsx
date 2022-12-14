import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Tab from "../components/Tab";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`flex h-screen flex-col text-white
      selection:bg-[#DB7093] selection:text-black`}
    >
      <Head>
        <title>Three.js Experiments</title>
        <meta
          name="description"
          content="Just some fun experiments with Next.js and Three.js"
        />
        <link rel="icon" href="/favicon.webp" />
      </Head>
      <Header />

      <main className="flex h-full items-center justify-center">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
