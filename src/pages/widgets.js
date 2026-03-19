import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Accordion from "@/components/widgets/Accordion";
import Assignments from "@/components/widgets/Assignments";
import Blockquote from "@/components/widgets/Blockquote";
import Border from "@/components/widgets/Border";
import CallOut from "@/components/widgets/CallOut";
import CardHorizontal from "@/components/widgets/CardHorizontal";
import ExpandableBanner from "@/components/widgets/ExpandableBanner";
import FlipCard from "@/components/widgets/FlipCard";
import HorizontalDisplay from "@/components/widgets/HorizontalDisplay";
import ImageGallery from "@/components/widgets/ImageGallery";
import ContentLock from "@/components/widgets/ContentLock";
import ContentLockQuiz from "@/components/widgets/ContentLockQuiz";
import MediaContainer from "@/components/widgets/MediaContainer";
import SideBySide from "@/components/widgets/SideBySide";
import SocialPost from "@/components/widgets/SocialPost";
import Tables from "@/components/widgets/Tables";
import Tabs from "@/components/widgets/Tabs";
import VideoWidget from "@/components/widgets/VideoWidget";
import VocabCards from "@/components/widgets/VocabCards";
import VocabList from "@/components/widgets/VocabList";
import { useEffect, useLayoutEffect } from "react";
import WidgetSidebar from "@/components/WidgetSidebar";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/night-owl.css";
import html from "highlight.js/lib/languages/xml";
import BackToTop from "@/components/BackToTop";
import Columns from "@/components/widgets/Columns";
import PersistentChecklist from "@/components/widgets/PersistentChecklist";
import NumberedDl from "@/components/widgets/NumberedDl";


export default function Widgets() {
	// Remove any existing theme link (required to keep theme styles just on the theme page)
	useLayoutEffect(() => {
		const existingLink = document.querySelector("link[data-theme-link]");
		if (existingLink) {
			document.head.removeChild(existingLink);
		}
	}, []);

	hljs.registerLanguage("html", html);
	useEffect(() => {
		// Iterate over each code block and check if it's already highlighted
		document.querySelectorAll("pre code").forEach((block) => {
			if (!block.dataset.highlighted) {
				// If not highlighted, highlight it and set the dataset attribute
				hljs.highlightElement(block);
				block.dataset.highlighted = true; // Mark the element as highlighted
			}
		});
	}, []);

	return (
		<>
			<Head>
				<title>Widgets</title>
			</Head>
			<header className="wd-header">
				<Navbar />
			</header>
			<div className="wd-intro">
				<h1>Widgets</h1>
				<p>
					Widgets are individual components that you can mix-and-match to form
					your web page. With these, there’s plenty of opportunity for
					customization.
				</p>
			</div>
			<div className="wd-grid">
				<main>
					<Accordion />
					<Assignments />
					<Blockquote />
					<Border />
					<CallOut />
					<CardHorizontal />
					<Columns />
					<ContentLock />
					<ContentLockQuiz />
					<ExpandableBanner />
					<FlipCard />
					<HorizontalDisplay />
					<ImageGallery />
					<MediaContainer />
					<NumberedDl />
					<PersistentChecklist />
					<SideBySide />
					<SocialPost />
					<Tables />
					<Tabs />
					<VideoWidget />
					<VocabCards />
					<VocabList />
				</main>
				<aside>
					<WidgetSidebar />
				</aside>
			</div>
			<BackToTop />
			<footer>
				<Footer />
			</footer>
		</>
	);
}
