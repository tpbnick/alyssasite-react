import { useEffect, useState } from "react";
import "./index.css";
import MainDisplay from "./components/MainDisplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";

function App() {
	const [isVisible, setIsVisible] = useState(false);

	// Show button when page is scrolled down
	useEffect(() => {
		const toggleVisibility = () => {
			if (window.pageYOffset > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	// Scroll to top handler
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div>
			<MainDisplay />
			{isVisible && (
				<div
					onClick={scrollToTop}
					className="fixed sm:bottom-10 bottom-5 sm:right-20 right-2 btn bg-pinkish drop-shadow-lg border-purple-950 text-purple-950 font-normal hover:bg-orangeish py-2 px-6 rounded-full cursor-pointer flex items-center justify-center text-center"
				>
					<FontAwesomeIcon icon={faCircleUp} size="xl" />
				</div>
			)}
		</div>
	);
}

export default App;
