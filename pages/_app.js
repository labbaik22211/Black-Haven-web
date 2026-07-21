import '../styles/globals.css';
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Black Haven — Minecraft SMP</title>
        <meta name="description" content="A friendly Minecraft SMP server" />
      </Head>
      <Header />
      <main className="flex-grow max-w-5xl mx-auto w-full p-4">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;