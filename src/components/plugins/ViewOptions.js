import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/night-owl.css";
import html from "highlight.js/lib/languages/xml";
import Image from "next/image";

hljs.registerLanguage("html", html);

export default function ViewOptions() {
  const codeRef = useRef(null);
  const [buttonText, setButtonText] = useState("Copy code");
	const [showCode, setShowCode] = useState(false);

	useEffect(() => {
		if (showCode) {
			hljs.highlightElement(codeRef.current); 
		}
	}, [showCode]);

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const handleCopyCode = async () => {
    if (!codeRef.current) return;
    try {
      await navigator.clipboard.writeText(codeRef.current.textContent);
      setButtonText("Copied!");
      setTimeout(() => setButtonText("Copy code"), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
      setButtonText("Failed to copy");
    }
  };

  return (
    <>
      <section className="wd-content" id="toc-view-options">
        <h3 id="view-options" className="section-top anchor">Dark Mode</h3>
        <p>Use <span className="wd-monospace">view-options</span> or <span className="wd-monospace">dark-mode</span> to add the dark mode view option to your course shell. This gives students the option to toggle on a dark mode version of the webpage.</p>
				<div className="wd-window">
					<div className="wd-btn-container">
						<button className="wd-toggle-btn"	onClick={() => setShowCode(!showCode)}>{showCode ? "Hide code" : "Show code"}</button>
						{showCode && (
						<button className="wd-copy-btn" onClick={handleCopyCode}>{buttonText}</button>
						)}
          </div>
					{showCode && (
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={codeRef}>
                {String.raw`<body view-options>`}{"\n"}{String.raw`<!-- OR -->`}{"\n"}{String.raw`<body dark-mode>`}
              </code>
            </pre>
          </div>
					)}
          </div>
					<br/>
				<div className="wd-visual-ex">
        <section className="wd-side-by-side">
        <div className="wd-side-by-side-item">
         <Image src="/images/plugins/VO-dark.jpg" alt="" width={292} height={280} priority="true"  />
          </div>
          <div className="wd-side-by-side-item">
          <Image src="/images/plugins/VO-dark-on.jpg" alt="" width={292} height={280} />
          </div>
          </section>
          </div>
      </section>
    </>
  )
}