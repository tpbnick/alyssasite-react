import { forwardRef } from "react";
import NickLyssPic from "../assets/nicklyss.webp";
import YosemitePic from "../assets/yosemite.webp";
import DopePic from "../assets/lyss.webp";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const About = forwardRef<HTMLDivElement>((_props, ref) => {
	const images = [
		{ src: NickLyssPic, alt: "Nick & Alyssa" },
		{ src: YosemitePic, alt: "Yosemite" },
		{ src: DopePic, alt: "Alyssa" },
	];

	return (
		<div ref={ref} className="px-4 sm:px-6 lg:px-16 pb-10">
			<p className="py-10 text-black font-bold text-4xl">About Me 😍</p>
			<p className="text-black text-xl lg:text-3xl pb-5">
				My name is Alyssa Platt, I'm from Kent Island, Maryland, and I am a digital
				marketing specialist! I graduated from the University of Maryland Global
				Campus in May 2020 with my Bachelor's in Marketing and a minor in Digital
				Media and Web Technology. I am passionate about great digital designs,
				whether it be an email, newsletter, social media post, etc. I love to create
				beautiful designs that make the audience want to learn more. I try to
				incorporate fresh, new ideas while maintaining brand voice, themes, and
				values.
			</p>
			<div className="flex justify-center flex-wrap gap-4 pb-10">
				<PhotoProvider>
					{images.map((image, index) => (
						<div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
							<PhotoView src={image.src}>
								<img
									src={image.src}
									alt={image.alt}
									className="rounded-lg drop-shadow-lg w-full h-auto cursor-pointer hover:scale-105 transition-transform duration-300"
								/>
							</PhotoView>
						</div>
					))}
				</PhotoProvider>
			</div>
		</div>
	);
});

export default About;
