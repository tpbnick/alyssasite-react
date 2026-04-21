import { useEffect, useState } from "react";
import "./index.css";
import MainDisplay from "./components/MainDisplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";

function App() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			setIsVisible(window.scrollY > 300);
		};

		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div>
			<MainDisplay />
			{isVisible && (
				<button
					onClick={scrollToTop}
					aria-label="Scroll to top"
					className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 btn bg-pinkish drop-shadow-lg border-purple-950 text-purple-950 font-normal hover:bg-orangeish py-2 px-4 rounded-full cursor-pointer flex items-center justify-center"
				>
					<FontAwesomeIcon icon={faCircleUp} size="xl" />
				</button>
			)}
		</div>
	);
}

export default App;
