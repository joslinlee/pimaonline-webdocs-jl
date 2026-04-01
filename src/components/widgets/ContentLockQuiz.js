import { useRef, useState, useEffect } from "react";
import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml";

const lockedContentQuizIncorrectAnswer = "Incorrect response. Please try again."; // Error response for quizzes
const lockedContentQuizEmptyResponse = "Please select an option before submitting."; // Error response for quizzes
const lockedContentQuizCorrectAnswer = "Correct response. Content is now unlocked.";
const messageTimeDuration = 750; // Duration for which feedback messages are displayed (in milliseconds)


hljs.registerLanguage("html", html);

export default function ContentLockWidgetQuiz() {
    // State variables
    const codeRef = useRef(null);
    const [buttonText, setButtonText] = useState("Copy code");
    const [keyStatus, setKeyStatus] = useState(false);

    const handleResetLockedArea = () => {
        const contentLockQuizForm = document.getElementById("quiz1");

        if (contentLockQuizForm) {
            contentLockQuizForm.reset();

            const contentLockErrorContainer = contentLockQuizForm.querySelector(".error-container");
            if (contentLockErrorContainer) {
                contentLockErrorContainer.innerHTML = "";
            }
        }

        setKeyStatus(false);
    };

    // useEffect runs in the client side to listen for state changes and have access to the document object
    useEffect(() => {
        const contentUnlockBtn = document.querySelector("#toc-content-lock-quiz .unlock-btn");

        // Dumbed Down Code to work with webdocs ----------

        // Quiz checking function
        const submitContentLockQuiz = () => {
            let contentLockQuizForm = document.getElementById("quiz1");

            if (contentLockQuizForm) {
                // This selects the option that the user selected
                let selectedOption = contentLockQuizForm.querySelector("input[name='quiz-options']:checked");

                // Initialize a variable for error message, that can be changed based on which error
                let contentLockErrorMessage = "";

                // If there is a selected option, run the logic to see if it matches
                if (selectedOption) {

                    // Check if the selected option's parent label has data-correct="true"
                    const selectedLabel = selectedOption.closest("label");
                    const isCorrect = selectedLabel?.getAttribute("data-correct") === "true";

                    if (isCorrect) {
                        // Use set time out for a delay to show the message
                        displayMessage(contentLockQuizForm, lockedContentQuizCorrectAnswer, "success");
                        setTimeout(() => {
                            resetDisplay(contentLockQuizForm);
                            setKeyStatus(true);
                        }, messageTimeDuration);
                        return true;
                    } else {
                        // Sets the error message for the user
                        contentLockErrorMessage = lockedContentQuizIncorrectAnswer;
                        displayMessage(contentLockQuizForm, contentLockErrorMessage, "error");
                        setTimeout(() => {
                            resetDisplay(contentLockQuizForm);
                        }, messageTimeDuration);
                        setKeyStatus(false);
                        return false;
                    }
                } else {
                    contentLockErrorMessage = lockedContentQuizEmptyResponse;
                    displayMessage(contentLockQuizForm, contentLockErrorMessage, "error");
                    setTimeout(() => {
                        resetDisplay(contentLockQuizForm);
                    }, messageTimeDuration);
                    setKeyStatus(false);
                    return false;
                }
            } else {
                //Error Check - no quiz id for form
                console.warn("Document error: quiz id for content lock quiz, not being applied");
                return false;
            }
        }

        // Function to display feedback from the form above the submit button
        const displayMessage = (quizForm, messageText, messageType) => {
            let contentLockErrorContainer = ensureErrorContainerPlacement(quizForm);
            let messageElement = document.createElement("span");

            contentLockErrorContainer.innerHTML = "";
            messageElement.textContent = messageText;
            messageElement.className = messageType === "success" ? "quiz-success-message" : "quiz-error-message";

            contentLockErrorContainer.appendChild(messageElement);
        };

        // Function to reset display message
        const resetDisplay = (quizForm) => {
            let contentLockErrorContainer = ensureErrorContainerPlacement(quizForm);
            let messageElement = contentLockErrorContainer.querySelector(".quiz-success-message, .quiz-error-message");
            if (messageElement) {
                messageElement.textContent = "";
            }
        };

        const ensureErrorContainerPlacement = (quizForm) => {
            let contentLockErrorContainer = quizForm.querySelector(".error-container");

            if (!contentLockErrorContainer) {
                contentLockErrorContainer = document.createElement("div");
                contentLockErrorContainer.classList.add("error-container");
                const formUnlockBtn = quizForm.querySelector(".unlock-btn");
                if (formUnlockBtn) {
                    formUnlockBtn.insertAdjacentElement("beforebegin", contentLockErrorContainer);
                } else {
                    quizForm.appendChild(contentLockErrorContainer);
                }
            }

            return contentLockErrorContainer;
        }

        // End of Dumbed Down Code to work with webdocs ----------

        // Actual code to trigger the click interaction

        // Triggers the confirmation window for student to agree to terms
        const handleUnlockButtonClick = () => {
            submitContentLockQuiz();
        };

        // Add click event listener to the unlock content button
        contentUnlockBtn.addEventListener("click", handleUnlockButtonClick);

        return () => {
            // Cleanup: Remove event listener when the component is unmounted to avoid confirmation window being triggered twice
            contentUnlockBtn.removeEventListener("click", handleUnlockButtonClick);
        };
    }, []);

    // useEffect here to access document and listen for changes to keyStatus variable
    useEffect(() => {
        checkQuizHiddenContent();
    }, [keyStatus]);

    const checkQuizHiddenContent = () => {
        // Target locked content areas and instruction areas
        const lockedContent = document.querySelectorAll("#toc-content-lock-quiz .locked-content");
        const contentLockInstructions = document.querySelectorAll("#toc-content-lock-quiz .instructions");
        const quizArea = document.querySelectorAll("#toc-content-lock-quiz .quiz");


        // For each locked content area, adjust visibility based on keyStatus
        lockedContent.forEach((contentArea, index) => {
            if (keyStatus) {
                // Unlocks the content area
                contentArea.classList.add("open");
                // Removes instructions from view
                contentLockInstructions[index].classList.add("complete");
                quizArea[index].classList.add("complete");
            } else {
                // Locks content area (functionality to re-lock content isn't active currently)
                contentArea.classList.remove("open");

                // Reveals instructions area (functionality to re-lock content isn't active currently)
                contentLockInstructions[index].classList.remove("complete");
                quizArea[index].classList.remove("complete");
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
        <section className="wd-content" id="toc-content-lock-quiz">
            <h2 id="content-lock-quiz" className="section-top anchor">
                Content Lock Quiz
            </h2>
            <p>
                Use the <strong>Content Lock Widget Quiz</strong> to lock and unlock content through a simple quiz with one correct answer.
            </p>
            <p>
                Use <span className="wd-monospace">.content-lock-widget</span> to wrap the entire widget.
                Use <span className="wd-monospace">.locked-content</span> to wrap the content you want hidden.
                Use <span className="wd-monospace">.instructions</span> to inform students about why content is hidden.
                Use <span className="wd-monospace">.quiz</span> to wrap the quiz elements.
                Use <span className="wd-monospace">.correct-answer</span> to mark the correct quiz option.
            </p>
            <h3>Data Keys</h3>
            <p>
                Each Content Lock Widget needs a numeric <span className="wd-monospace">data-key</span> on the <span className="wd-monospace">.locked-content</span> div. Matching keys control what unlocks together.
                Use one quiz per data-key so each quiz unlocks only one locked area. If multiple locked areas share a key, they will all unlock when that quiz is answered correctly.
                Quiz and non-quiz Content Lock Widgets use the same key system, so sharing a key between them will unlock both.
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
                                <p>Please complete the quiz below.</p>
                            </div>
                            <div className="quiz">
                                <form id="quiz1">
                                    <h3>What Option is Correct?</h3>
                                    <label className="quiz-option">
                                        <input type="radio" name="quiz-options" value="a"/>
                                        <span>Option A</span>
                                    </label>
                                    <label className="quiz-option">
                                        <input type="radio" name="quiz-options" value="b" />
                                        <span>Option B</span>
                                    </label>
                                    <label className="correct-answer quiz-option" data-correct="true">
                                        <input type="radio" name="quiz-options" value="c" className="correct-answer" />
                                        <span>Correct Answer</span>
                                    </label>
                                    <label className="quiz-option">
                                        <input type="radio" name="quiz-options" value="d" />
                                        <span>Option D</span>
                                    </label>
                                    <div className="error-container"></div>
                                    <input type="button" value="Submit" className="unlock-btn" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wd-btn-container">
                    <button
                        className="wd-toggle-btn" onClick={() => setShowCode(!showCode)}>
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
      <p>Please complete the quiz below.</p>
    </div>
    <div class="quiz">
        <form>
            <h3>What Option is Correct?</h3>
            <label class="correct-answer">Option A</label>
            <label>Option B</label>
            <label class="correct-answer">Correct Answer</label>
            <label>Option D</label>
        </form>
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