import { useState, useRef } from "react";
import Headshot from "./Headshot";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Logo from "../assets/ap.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const MainDisplay = () => {
	const [isOpen, setIsOpen] = useState(false);
	const aboutRef = useRef<HTMLDivElement | null>(null);
	const portfolioRef = useRef<HTMLDivElement | null>(null);
	const contactRef = useRef<HTMLDivElement | null>(null);

	const scrollTo = (ref: { current: HTMLDivElement | null }) => {
		setIsOpen(false);
		if (ref.current) {
			window.scrollTo({ top: ref.current.offsetTop - 100, behavior: "smooth" });
		}
	};

	const btnClass =
		"btn bg-pinkish drop-shadow-md border-none text-purple-950 font-normal hover:bg-orangeish";

	return (
		<div className="py-5 px-4 lg:pt-10 lg:pb-20 lg:px-16 xl:px-32 2xl:px-52">
			<div className="navbar relative bg-white rounded-t-xl drop-shadow-md flex justify-between items-center z-10 sticky top-0">
				<div className="flex items-center">
					<img src={Logo} className="max-h-20" alt="logo" />
					<span className="pl-3 text-4xl font-belleza font-bold text-yellowish">
						Alyssa Platt
					</span>
				</div>

				{/* Desktop nav */}
				<div className="hidden lg:flex items-center py-4 space-x-2">
					<button className={btnClass} onClick={() => scrollTo(aboutRef)}>
						About
					</button>
					<button className={btnClass} onClick={() => scrollTo(portfolioRef)}>
						Portfolio
					</button>
					<button className={btnClass} onClick={() => scrollTo(contactRef)}>
						Contact
					</button>
					<button
						className={btnClass}
						onClick={() =>
							window.open("https://www.linkedin.com/in/alyssa-platt/", "_blank")
						}
					>
						LinkedIn
					</button>
				</div>

				{/* Mobile hamburger */}
				<div className="flex lg:hidden">
					<button
						onClick={() => setIsOpen(!isOpen)}
						aria-label="Toggle menu"
						className="focus:outline-none z-10 pr-3"
					>
						<FontAwesomeIcon icon={faBars} size="2xl" />
					</button>
					<div
						className={`absolute top-full left-0 right-0 w-full py-2 px-2 bg-white rounded-b-lg shadow-xl overflow-hidden grid grid-cols-2 gap-2 transition-all duration-200 ease-in-out ${
							isOpen
								? "max-h-[300px] opacity-100 visible"
								: "max-h-0 opacity-0 invisible"
						}`}
					>
						<button
							className={`${btnClass} w-full`}
							onClick={() => scrollTo(aboutRef)}
						>
							About
						</button>
						<button
							className={`${btnClass} w-full`}
							onClick={() => scrollTo(portfolioRef)}
						>
							Portfolio
						</button>
						<button
							className={`${btnClass} w-full`}
							onClick={() => scrollTo(contactRef)}
						>
							Contact
						</button>
						<button
							className={`${btnClass} w-full`}
							onClick={() => {
								setIsOpen(false);
								window.open("https://www.linkedin.com/in/alyssa-platt/", "_blank");
							}}
						>
							LinkedIn
						</button>
					</div>
				</div>
			</div>

			<div id="portfolio-content" className="bg-gray-100 rounded-b-xl">
				<Headshot />
				<About ref={aboutRef} />
				<Skills />
				<Portfolio ref={portfolioRef} />
				<Contact ref={contactRef} />
			</div>
		</div>
	);
};

export default MainDisplay;
