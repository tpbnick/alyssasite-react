import { useState, useEffect, useRef } from "react";
import Headshot from "./Headshot";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Logo from "../assets/ap.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const MainDisplay = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const aboutRef = useRef<HTMLDivElement | null>(null);
	const portfolioRef = useRef<HTMLDivElement | null>(null);
	const contactRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 1200);
		};

		checkMobile();

		window.addEventListener("resize", checkMobile);

		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	const handleHamburgerClick = () => {
		setIsOpen(!isOpen);
	};

	const scrollToAbout = () => {
		setIsOpen(false);
		if (aboutRef.current) {
			const aboutPosition = aboutRef.current.offsetTop;
			window.scrollTo({ top: aboutPosition - 100, behavior: "smooth" });
		}
	};

	const scrollToPortfolio = () => {
		setIsOpen(false);
		if (portfolioRef.current) {
			const portfolioPosition = portfolioRef.current.offsetTop;
			window.scrollTo({ top: portfolioPosition - 100, behavior: "smooth" });
		}
	};

	const scrollToContact = () => {
		setIsOpen(false);
		if (contactRef.current) {
			const contactPosition = contactRef.current.offsetTop;
			window.scrollTo({ top: contactPosition - 100, behavior: "smooth" });
		}
	};

	return (
		<div className={isMobile ? "py-5 px-2" : "pt-10 pb-20 px-60"}>
			<div
				className={`navbar bg-white rounded-t-xl drop-shadow-md flex justify-between items-center z-10 sticky top-0`}
			>
				<div className="flex items-center">
					<img src={Logo} className="max-h-20" alt="logo"></img>
					<a className="pl-3 normal-case text-4xl font-belleza font-bold text-yellowish">
						Alyssa Platt
					</a>
				</div>
				{isMobile ? (
					<div>
						<button
							onClick={handleHamburgerClick}
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
								className="btn bg-pinkish drop-shadow-md border-none text-purple-950 font-normal hover:bg-orangeish w-full"
								onClick={scrollToAbout}
							>
								About
							</button>
							<button
								className="btn bg-pinkish drop-shadow-md border-none text-purple-950 font-normal hover:bg-orangeish w-full"
								onClick={scrollToPortfolio}
							>
								Portfolio
							</button>
							<button
								className="btn bg-pinkish drop-shadow-md border-none text-purple-950 font-normal hover:bg-orangeish w-full"
								onClick={scrollToContact}
							>
								Contact
							</button>
							<button className="btn bg-pinkish drop-shadow-md border-none text-purple-950 font-normal hover:bg-orangeish w-full">
								LinkedIn
							</button>
						</div>
					</div>
				) : (
					<div className="justify-items-end py-4 space-x-2">
						<button
							className="btn bg-pinkish drop-shadow-md border-none text-purple-950 font-normal hover:bg-orangeish"
							onClick={scrollToAbout}
						>
							About
						</button>
						<button
							className="btn bg-pinkish drop-shadow-md border-none text-purple-950 font-normal hover:bg-orangeish"
							onClick={scrollToPortfolio}
						>
							Portfolio
						</button>
						<button
							className="btn bg-pinkish drop-shadow-md border-none text-purple-950 font-normal hover:bg-orangeish"
							onClick={scrollToContact}
						>
							Contact
						</button>
						<button className="btn bg-pinkish drop-shadow-md border-none text-purple-950 font-normal hover:bg-orangeish">
							LinkedIn
						</button>
					</div>
				)}
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
