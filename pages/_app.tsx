import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex h-screen flex-col">
      <Head>
        <title>Three.js Experiments</title>
        <meta
          name="description"
          content="Just some fun experiments with Next.js and Three.js"
        />
        <link rel="icon" href="/favicon.webp" />
      </Head>
      <header></header>

      <main className="grid h-screen place-content-center">
        <Component {...pageProps} />
      </main>
      <footer className="mt-auto grid w-full place-content-center font-bold">
        Made with 💛 by Max
      </footer>
    </div>
  );
}

export default MyApp;
