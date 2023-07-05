import Head from "next/head";
import Navbar from "@/components/Navbar";
import Homepage from "@/components/Homepage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>PimaOnline Webdocs</title>
        <meta name="description" content="Pima Online Webdocs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="wd-home-main">
        <Homepage />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
