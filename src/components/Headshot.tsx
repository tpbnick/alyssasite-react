import AlyssaPic from "../assets/alyssa.webp";
import Resume from "../assets/aplatt_resume.pdf";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Headshot = () => {
	const handleSeeResume = () => {
		window.open(Resume);
	};

	return (
		<div className="px-4 sm:px-6 lg:px-16 pb-10">
			<div className="flex flex-col lg:flex-row items-center lg:py-20 py-10 gap-8 lg:gap-12">
				<div className="w-full lg:w-1/2 flex justify-center">
					<img
						src={AlyssaPic}
						className="w-full max-w-sm lg:max-w-full h-auto rounded-lg shadow-lyssShadow"
						alt="Alyssa"
					/>
				</div>
				<div className="w-full lg:w-1/2">
					<h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold text-black">
						Hi there! 👋
					</h1>
					<p className="text-xl lg:text-2xl xl:text-3xl text-black py-6">
						Fuelled by a passion for designing compelling digital media, I have a deep
						desire to excel and continuously improve in my work. Learn more about me
						below!
					</p>
					<div className="pb-5 max-w-xs">
						<button
							className="btn bg-pinkish drop-shadow-md border-none text-purple-950 font-normal hover:bg-orangeish w-full"
							onClick={handleSeeResume}
						>
							See Resume
						</button>
					</div>
					<div className="space-x-8">
						<a
							href="https://www.youtube.com/@lyssplatt/videos"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="YouTube"
						>
							<FontAwesomeIcon
								icon={faYoutube}
								size="3x"
								className="text-pink-400 transition duration-300 ease-in-out transform hover:scale-125"
							/>
						</a>
						<a
							href="https://www.linkedin.com/in/alyssa-platt/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn"
						>
							<FontAwesomeIcon
								icon={faLinkedin}
								size="3x"
								className="text-pink-400 transition duration-300 ease-in-out transform hover:scale-125"
							/>
						</a>
						<a href="mailto:lyssplatt@gmail.com" aria-label="Email">
							<FontAwesomeIcon
								icon={faEnvelope}
								size="3x"
								className="text-pink-400 transition duration-300 ease-in-out transform hover:scale-125"
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Headshot;
