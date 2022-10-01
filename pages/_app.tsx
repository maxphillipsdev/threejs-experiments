import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Tab from "../components/Tab";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`flex h-screen flex-col  bg-black text-white`}>
      <Head>
        <title>Three.js Experiments</title>
        <meta
          name="description"
          content="Just some fun experiments with Next.js and Three.js"
        />
        <link rel="icon" href="/favicon.webp" />
      </Head>
      <Header />

      <main className="grid h-screen place-content-center">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
