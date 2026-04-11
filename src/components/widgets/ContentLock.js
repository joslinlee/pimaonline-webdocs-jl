import { useRef, useState, useEffect } from "react";
import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml";

hljs.registerLanguage("html", html);

export default function ContentLockWidget() {
  // State variables
  const codeRef = useRef(null);
  const [buttonText, setButtonText] = useState("Copy code");
  const [keyStatus, setKeyStatus] = useState(false);

  const handleUnlockButtonClick = () => {
    setKeyStatus(true);
  };

  const handleResetLockedArea = () => {
    setKeyStatus(false);
  };

  // useEffect runs in the client side to listen for state changes and have access to the document object
  useEffect(() => {
    const contentUnlockBtn = document.querySelector(".unlock-btn");

    // Add click event listener to the unlock content button
    contentUnlockBtn.addEventListener("click", handleUnlockButtonClick);

    return () => {
      // Cleanup: Remove event listener when the component is unmounted to avoid confirmation window being triggered twice
      contentUnlockBtn.removeEventListener("click", handleUnlockButtonClick);
    };
  }, []);

  // useEffect here to access document and listen for changes to keyStatus variable
  useEffect(() => {
    checkHiddenContent();
  }, [keyStatus]);

  const checkHiddenContent = () => {
    // Target locked content areas and instruction areas
    const lockedContent = document.querySelectorAll(".locked-content");
    const contentLockInstructions = document.querySelectorAll(".instructions");

    // For each locked content area, adjust visibility based on keyStatus
    lockedContent.forEach((contentArea, index) => {
      if (keyStatus) {
        // Unlocks the content area
        contentArea.classList.add("open");
        // Removes instructions from view
        contentLockInstructions[index].classList.add("complete");
      } else {
        // Locks content area (functionality to re-lock content isn't active currently)
        contentArea.classList.remove("open");

        // Reveals instructions area (functionality to re-lock content isn't active currently)
        contentLockInstructions[index].classList.remove("complete");
      }
    });
  };

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
    <section className="wd-content" id="toc-content-lock">
      <h2 id="content-lock" className="section-top anchor">
        Content Lock
      </h2>
      <p>
        Use the <strong>Content Lock Widget</strong> to lock and unlock content.
      </p>
      <p>
				Use <span className="wd-monospace">.content-lock-widget</span> to wrap the entire widget.
        Use <span className="wd-monospace">.locked-content</span> to wrap the content you want hidden.
        Use <span className="wd-monospace">.instructions</span> to inform students what they need to do to unlock the content.
        Use <span className="wd-monospace">.unlocked-btn</span> to label the action for unlocking the content.
      </p>
			<h3>Data Keys</h3>
			<p>
				Each Content Lock Widget needs a numeric <span className="wd-monospace">data-key</span> on the <span className="wd-monospace">.locked-content</span> div. Matching keys control what unlocks together.
			</p>
			<h4>For Example:</h4>
			<p>
			If two Content Lock Widgets on a single page have the same data key. Once one is unlocked, both will unlock. If they have different data keys, they can be unlocked independently.
			</p>
      <div className="wd-window">
        <div className="wd-visual-ex">
          <div className="white-background">
            <div className={`content-lock-widget${keyStatus ? " unlocked" : ""}`}>
							<div className="locked-content" data-key="1">
								<h2>Visible Content Section</h2>
								<p>This section displays the initial part of the content that is only partially revealed. As you scroll or interact with the widget, more of the content gradually becomes visible. This mechanism encourages engagement by requiring the user to reveal additional information, enhancing their learning experience.</p>
                {keyStatus && (
                  <button type="button" className="reset-locked-area-btn" onClick={handleResetLockedArea}>
                    Reset Locked Area
                  </button>
                )}
								</div>
								<div className="instructions">
									<p>I have read and understand all the saftey protocols for this lab.</p>
									<a className="btn unlock-btn">Confirm</a>
								</div>
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
              {String.raw`
  <div class="content-lock-widget">
    <div class="locked-content" data-key="1">
      <h2>Visible Content Section</h2>
      <p>This section displays the initial part of the content that is only...</p>
    </div>
    <div class="instructions">
      <p>I have read and understand all the safety protocols for this lab.</p>
      <a class="unlock-btn">Confirm</a>
    </div>
  </div>
`}
            </code>
          </pre>
        </div>
				)}
      </div>
    </section>
  );
}