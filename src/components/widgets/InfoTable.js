import { useRef, useState, useEffect } from "react";
import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml";

hljs.registerLanguage("html", html);

export default function InfoTable() {
  const codeRef = useRef(null);
  const [buttonText, setButtonText] = useState("Copy code");
  const [showCode, setShowCode] = useState(false);

  useEffect(() => {
    if (showCode && codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [showCode]);

  const handleCopyCode = async () => {
    if (!codeRef.current || !navigator.clipboard) return;
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
    <section className="wd-content" id="toc-info-table">
      <h2 className="section-top anchor" id="info-table">
        Info Table
      </h2>
      <p>
        Use the <strong>Info Table Widget</strong> to create a definition list that displays side-by-side like a table.
      </p>
      <p>
        Use <span className="wd-monospace">.info-table</span> on a{" "}
        <span className="wd-monospace">&lt;dl&gt;</span> element. Use{" "}
        <span className="wd-monospace">&lt;dt&gt;</span> tags for terms and{" "}
        <span className="wd-monospace">&lt;dd&gt;</span> for definitions.
      </p>
      <div className="wd-window">
        <div className="wd-visual-ex">
          <dl className="info-table">
            <dt>Instructor</dt>
            <dd>Jane Doe</dd>
            <dt>Email</dt>
            <dd>jdoe@example.com</dd>
            <dt>Office Hours</dt>
            <dd>Mon/Wed 10am - 12pm</dd>
          </dl>
        </div>
        <div className="wd-btn-container">
          <button
            className="wd-toggle-btn"
            onClick={() => setShowCode(!showCode)}
          >
            {showCode ? "Hide code" : "Show code"}
          </button>
          {showCode && (
            <button className="wd-copy-btn" onClick={handleCopyCode}>
              {buttonText}
            </button>
          )}
        </div>
        {showCode && (
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={codeRef}>
                {String.raw`<dl class="info-table">
  <dt>Instructor</dt>
  <dd>Jane Doe</dd>
  <dt>Email</dt>
  <dd>jdoe@example.com</dd>
  <dt>Office Hours</dt>
  <dd>Mon/Wed 10am - 12pm</dd>
</dl>`}
              </code>
            </pre>
          </div>
        )}
      </div>
    </section>
  );
}
