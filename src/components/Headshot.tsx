import AlyssaPic from "../assets/alyssa.webp";
import Resume from "../assets/aplatt_resume.pdf";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Headshot = () => {
	const handleSeeResume = () => {
		window.open(Resume);
	};

	return (
		<div className="bg-gray-100 rounded-b-xl lg:px-40 pb-10">
			<div className="flex flex-col lg:flex-row items-center lg:py-20 py-10 px-10 space-y-8">
				<div className="w-full lg:w-1/2 flex justify-center">
					<img
						src={AlyssaPic}
						className="max-w-lg min-w-md w-full h-auto rounded-lg shadow-lyssShadow"
						alt="Alyssa"
					/>
				</div>
				<div className="w-full lg:w-1/2 px-10">
					<h1 className="text-4xl lg:text-7xl font-bold text-black">Hi there! 👋</h1>
					<p className="text-xl lg:text-4xl text-black py-6">
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
						>
							<FontAwesomeIcon
								icon={faYoutube}
								size="3x"
								className="text-pink-400 transition duration-500 ease-in-out transform hover:scale-125"
							/>
						</a>
						<a
							href="https://www.linkedin.com/in/alyssa-platt/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon
								icon={faLinkedin}
								size="3x"
								className="text-pink-400 transition duration-500 ease-in-out transform hover:scale-125"
							/>
						</a>
						<a
							href="mailto:lyssplatt@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon
								icon={faEnvelope}
								size="3x"
								className="text-pink-400 transition duration-500 ease-in-out transform hover:scale-125"
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Headshot;
