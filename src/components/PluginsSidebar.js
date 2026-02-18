import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function PluginsSidebar() {
  const [tocOpen, setTocOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const router = useRouter();

  const sections = useRef([
    "toc-animation-library", "toc-custom-combos", "toc-dark-mode", "toc-focus-text", "toc-large-text", "toc-narrow-width", "toc-view-options", "toc-fade-in-animation", "toc-slide-in-animations", "toc-button-animations"
  ]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Adjust the offset as needed

      const currentSection = sections.current.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;
        return scrollPosition >= offsetTop && scrollPosition < offsetBottom;
      });

      if (currentSection !== activeId) {
        setActiveId(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeId]);

  const toggleTOC = () => {
    setTocOpen(!tocOpen);
  };

  const closeSidebar = () => {
    setTocOpen(false);
  };

  return (
    <>
      <button className="toc-btn" onClick={toggleTOC}>
        <Image className="toc-icon" src="/images/toc.svg" alt="table of content open button" width={20} height={16} />
        <p>Plugins Content</p>
      </button>
      <button className={`close-btn ${tocOpen ? "show-close-btn" : "hide-close-btn"}`} onClick={closeSidebar}>
        <span></span>
        <span></span>
      </button>
      <ul className={`wd-sidebar ${tocOpen ? "show-toc" : "hide-toc"}`}>
        <li className={activeId === "toc-animation-library" ? "is-current" : ""}>
          <Link href="/plugins/#animation-library" className="toc-animation-library">Animation Library</Link>
          <ul>
            <li className={activeId === "toc-fade-in-animation" ? "is-current" : ""}>
              <Link href="/plugins/#fade-in-animation" className="toc-fade-in-animation">Fade-in Content</Link>
            </li>
            <li className={activeId === "toc-slide-in-animations" ? "is-current" : ""}>
              <Link href="/plugins/#slide-in-animations" className="toc-slide-in-animations">Slide-in Content</Link>
            </li>
            <li className={activeId === "toc-button-animations" ? "is-current" : ""}>
              <Link href="/plugins/#button-animations" className="toc-button-animations">Button Animations</Link>
            </li>
          </ul>
        </li>
        <li className={activeId === "toc-view-options-main" ? "is-current" : ""}><Link href="/plugins/#view-options-main" className="toc-view-options-main">View Options</Link>
          <ul>
            <li className={activeId === "toc-view-options" ? "is-current" : ""}>
              <Link href="/plugins/#view-options" className="toc-view-options">Dark Mode</Link>
            </li>
          </ul>
        </li>
      </ul>
    </>
  )
}
