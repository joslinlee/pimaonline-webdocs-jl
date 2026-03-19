import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function WidgetSidebar() {
	const [tocOpen, setTocOpen] = useState(false);
	const [activeId, setActiveId] = useState("");
	const router = useRouter();

	const sections = useRef([
		"toc-accordion",
		"toc-assignments",
		"toc-blockquote",
		"toc-border",
		"toc-call-out",
		"toc-card-horizontal",
		"toc-columns",
		"toc-content-lock",
		"toc-content-lock-quiz",
		"toc-expandable-banner",
		"toc-flip-card",
		"toc-horizontal-display",
		"toc-img-gallery",
		"toc-media-container",
		"toc-numbered-dl",
		"toc-persistent-checklist",
		"toc-side-by-side",
		"toc-social-post",
		"toc-tables",
		"toc-tabs",
		"toc-video-widget",
		"toc-vocab-cards",
		"toc-vocab-list",
	]);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY + 150; // Adjust the offset as needed

			const currentSection = sections.current.find((section) => {
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
				<Image
					className="toc-icon"
					src="/images/toc.svg"
					alt="table of content open button"
					width={20}
					height={16}
				/>
				<p>Widget Content</p>
			</button>
			<button
				className={`close-btn ${tocOpen ? "show-close-btn" : "hide-close-btn"}`}
				onClick={closeSidebar}
			>
				<span></span>
				<span></span>
			</button>
			<ul className={`wd-sidebar ${tocOpen ? "show-toc" : "hide-toc"}`}>
				<li className={router.pathname === "/widgets" ? "active-page" : ""}>
					<Link href="/widgets">Widgets</Link>
					<ul>
						<li className={activeId === "toc-accordion" ? "is-current" : ""}>
							<Link href="/widgets/#accordion" className="toc-accordion">
								Accordion
							</Link>
						</li>
						<li className={activeId === "toc-assignments" ? "is-current" : ""}>
							<Link href="/widgets/#assignments" className="toc-assignments">
								Assignments Widget
							</Link>
						</li>
						<li className={activeId === "toc-blockquote" ? "is-current" : ""}>
							<Link href="/widgets/#blockquote" className="toc-blockquote">
								Blockquote
							</Link>
						</li>
						<li className={activeId === "toc-border" ? "is-current" : ""}>
							<Link href="/widgets/#border" className="toc-border">
								Border
							</Link>
						</li>
						<li className={activeId === "toc-call-out" ? "is-current" : ""}>
							<Link href="/widgets/#call-out" className="toc-call-out">
								Call Out
							</Link>
						</li>
						<li
							className={activeId === "toc-card-horizontal" ? "is-current" : ""}
						>
							<Link
								href="/widgets/#card-horizontal"
								className="toc-card-horizontal"
							>
								Card Horizontal
							</Link>
						</li>
						<li className={activeId === "toc-columns" ? "is-current" : ""}>
							<Link href="/widgets/#columns" className="toc-columns">
								Columns
							</Link>
						</li>
						<li
							className={activeId === "toc-content-lock" ? "is-current" : ""}
						>
							<Link
								href="/widgets/#content-lock"
								className="toc-content-lock"
							>
								Content Lock
							</Link>
						</li>
						<li
							className={activeId === "toc-content-lock-quiz" ? "is-current" : ""}
						>
							<Link
								href="/widgets/#content-lock-quiz"
								className="toc-content-lock-quiz"
							>
								Content Lock Quiz
							</Link>
						</li>
						<li className={activeId === "toc-expandable-banner" ? "is-current" : ""}>
							<Link href="/widgets/#expandable-banner" className="toc-expandable-banner">
								Expandable Banner
							</Link>
						</li>
						<li className={activeId === "toc-flip-card" ? "is-current" : ""}>
							<Link href="/widgets/#flip-card" className="toc-flip-card">
								Flip Card
							</Link>
						</li>
						<li
							className={
								activeId === "toc-horizontal-display" ? "is-current" : ""
							}
						>
							<Link
								href="/widgets/#horizontal-display"
								className="toc-horizontal-display"
							>
								Horizontal Display
							</Link>
						</li>
						<li className={activeId === "toc-img-gallery" ? "is-current" : ""}>
							<Link href="/widgets/#img-gallery" className="toc-img-gallery">
								Image Gallery
							</Link>
						</li>
						<li
							className={activeId === "toc-media-container" ? "is-current" : ""}
						>
							<Link
								href="/widgets/#media-container"
								className="toc-media-container"
							>
								Media Container
							</Link>
						</li>
						<li className={activeId === "toc-numbered-dl" ? "is-current" : ""}>
							<Link href="/widgets/#numbered-dl" className="toc-numbered-dl">
								Numbered DL
							</Link>
						</li>
						<li className={activeId === "toc-persistent-checklist" ? "is-current" : ""}>
							<Link href="/widgets/#persistent-checklist" className="toc-persistent-checklist">
								Persistent Checklist
							</Link>
						</li>
						<li className={activeId === "toc-side-by-side" ? "is-current" : ""}>
							<Link href="/widgets/#side-by-side" className="toc-side-by-side">
								Side-by-side
							</Link>
						</li>
						<li className={activeId === "toc-social-post" ? "is-current" : ""}>
							<Link href="/widgets/#social-post" className="toc-social-post">
								Social Post
							</Link>
						</li>
						<li className={activeId === "toc-tables" ? "is-current" : ""}>
							<Link href="/widgets/#tables" className="toc-tables">
								Tables
							</Link>
						</li>
						<li className={activeId === "toc-tabs" ? "is-current" : ""}>
							<Link href="/widgets/#tabs" className="toc-tabs">
								Tabs
							</Link>
						</li>
						<li className={activeId === "toc-video-widget" ? "is-current" : ""}>
							<Link href="/widgets/#video-widget" className="toc-video-widget">
								Video Widget
							</Link>
						</li>
						<li className={activeId === "toc-vocab-cards" ? "is-current" : ""}>
							<Link href="/widgets/#vocab-cards" className="toc-vocab-cards">
								Vocab Cards
							</Link>
						</li>
						<li className={activeId === "toc-vocab-list" ? "is-current" : ""}>
							<Link href="/widgets/#vocab-list" className="toc-vocab-list">
								Vocab List
							</Link>
						</li>
					</ul>
				</li>
			</ul>
		</>
	);
}
