import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/night-owl.css";
import html from "highlight.js/lib/languages/xml";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import ViewOptions from "@/components/plugins/ViewOptions";
import FadeInAnimation from "@/components/plugins/FadeInAnimation";
import SlideInAnimations from "@/components/plugins/SlideInAnimations";
import ButtonsAnimations from "@/components/plugins/ButtonAnimations";
import PluginsSidebar from "@/components/PluginsSidebar";
import BackToTop from "@/components/BackToTop";

export default function Plugins() {

  // Remove any existing theme link (required to keep theme styles just on the theme page)
  useLayoutEffect(() => {
    const existingLink = document.querySelector("link[data-theme-link]");
    if (existingLink) {
      document.head.removeChild(existingLink);
    }
  }, []);

  hljs.registerLanguage("html", html);
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const codeRefs = [
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  const [buttonTexts, setButtonTexts] = useState([
    "Copy code",
    "Copy code",
    "Copy code"
  ]);

  const handleCopyCode = async (index) => {
    if (!codeRefs[index].current) return;
    try {
      await navigator.clipboard.writeText(codeRefs[index].current.textContent);
      setButtonTexts(texts => texts.map((text, i) => (i === index ? "Copied!" : text)));
      setTimeout(() => {
        setButtonTexts(texts => texts.map((text, i) => (i === index ? "Copy code" : text)));
      }, 2000);
    } catch (err) {
      console.error("Copy failed:", err);
      setButtonTexts(texts => texts.map((text, i) => (i === index ? "Failed to copy" : text)));
    }
  };

  return (
    <>
     <Head>
        <title>Utilities</title>
      </Head>
      <header className="wd-header">
        <Navbar />
      </header>
      <div className="wd-intro">
      <h1>Plugins</h1>
<p>Plugins are view option features you can add into your code for various effects on your overall layout. Pick and choose which to add to your course or add them all at once.</p>
      </div>
      <div className="wd-grid">
        <main>
          <h2 id="animation-library" className="section-top anchor">Animation Library</h2>
          <p className="wd-break">Add animation classes to content you'd like to animate.</p>
          <div className="wd-subitems">
            <FadeInAnimation />
          </div>
          <div className="wd-subitems">
            <SlideInAnimations />
          </div>
          <div className="wd-subitems">
            <ButtonsAnimations />
          </div>
          <h2 id="view-options-main" className="section-top anchor">View Options</h2>
        <p className="wd-break">Quickly offer view option features by adding just a single attribute to your <span className="wd-monospace">&lt;body&gt;</span> element</p>
          <div className="wd-subitems">
          <ViewOptions />
          </div>
        </main>
        <aside>
          <PluginsSidebar />
        </aside>
        </div>
        <BackToTop />
        <footer>
          <Footer />
        </footer>
    </>
  )
}