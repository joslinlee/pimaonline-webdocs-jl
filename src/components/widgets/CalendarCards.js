import { useRef, useState, useEffect } from "react";
import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml";
import css from "highlight.js/lib/languages/css";

hljs.registerLanguage("html", html);
hljs.registerLanguage("css", css);

export default function CalendarCards() {
  const codeRef = useRef(null);
  const [buttonText, setButtonText] = useState("Copy code");
	const [showCode, setShowCode] = useState(false);

	useEffect(() => {
		if (showCode) {
			hljs.highlightElement(codeRef.current); 
		}
	}, [showCode]);

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
    <section className="wd-content" id="toc-calendar-cards">
      <h2 id="calendar-cards" className="section-top anchor">
        Calendar Cards
      </h2>
      <p>
        The <strong>Calendar Cards</strong> widget is used to display interactive, image-based cards for various course activities such as discussions, readings, and quizzes. Background images are applied automatically and dynamically based on card class, and can be customized if desired.
      </p>
      <p>
        Wrap your cards inside a <span className="wd-monospace">&lt;div class="calendar-grid"&gt;</span> container.</p>
      <p>
       For each individual card item, add the class <span className="wd-monospace">calendar-card</span> along with one of the following modifiers:
      </p>
      <ul className="wd-subitems">
        <li><span className="wd-monospace">discussion-post</span></li>
        <li><span className="wd-monospace">discussion-response</span></li>
        <li><span className="wd-monospace">activity</span></li>
        <li><span className="wd-monospace">reading</span></li>
        <li><span className="wd-monospace">quiz</span></li>
      </ul>
      <h4>Custom Images</h4>
      <p>
      Add custom background images by providing new URLs for the <span className="wd-monospace">--card-bg-image</span> CSS property on each specific class in the <span className="wd-monospace">custom.css</span> file. For example:
      </p>
      <div className="wd-html-code">
        <pre>
          <code className="language-css">
            {String.raw`  .calendar-grid .calendar-card.discussion-post {
       --card-bg-image: url('https://your-custom-url.jpg');
  }`}
          </code>
        </pre>
      </div>
      <div className="wd-window">
        <div className="wd-visual-ex">
          <div className="calendar-grid">
            <div className="calendar-card discussion-post">
              <h3>Monday</h3>
              <h4>Initial Discussion Post</h4>
              <a href="#" className="btn">View Post</a>
            </div>
            <div className="calendar-card reading">
              <h3>Wednesday</h3>
              <h4>Week 1 Assigned Readings</h4>
              <a href="#" className="btn">Read Now</a>
            </div>
            <div className="calendar-card quiz">
              <h3>Thursday</h3>
              <h4>Module 1 Quiz</h4>
              <a href="#" className="btn">Take Quiz</a>
            </div>
          </div>
        </div>
        <div className="wd-btn-container">
					<button
						className="wd-toggle-btn"	onClick={() => setShowCode(!showCode)}>
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
              {String.raw`<div class="calendar-grid">
  <!-- Change the secondary class below to swap out the background image -->
  <div class="calendar-card discussion-post">
    <h3>Monday</h3>
    <h4>Initial Discussion Post</h4>
    <a href="#" class="btn">View Post</a>
  </div>
</div>`}
            </code>
          </pre>
        </div>
				)}
      </div>
    </section>
  );
}
