import { forwardRef } from "react";

import NickLyssPic from "../assets/nicklyss.webp";
import YosemitePic from "../assets/yosemite.webp";
import DopePic from "../assets/lyss.webp";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const About = forwardRef<HTMLDivElement>((_props, ref) => {
	const images = [
		{ src: NickLyssPic, alt: "Nicklyss", caption: "Nicklyss" },
		{ src: YosemitePic, alt: "Alaska", caption: "Alaska" },
		{ src: DopePic, alt: "Dope", caption: "Dope" },
	];

	return (
		<div ref={ref} className="px-10 lg:px-60 pb-10">
			<p className="py-10 text-black font-bold text-4xl">About Me 😍</p>
			<p className="text-black text-xl lg:text-3xl pb-5">
				My name is Alyssa Platt, I’m from Kent Island, Maryland, and I am a digital
				marketing specialist! I graduated from the University of Maryland Global
				Campus in May 2020 with my Bachelor’s in Marketing and a minor in Digital
				Media and Web Technology. I am passionate about great digital designs,
				whether it be an email, newsletter, social media post, etc. I love to create
				beautiful designs that make the audience want to learn more. I try to
				incorporate fresh, new ideas while maintaining brand voice, themes, and
				values.
			</p>
			<div className="photo-gallery pb-10">
				<PhotoProvider>
					<div className="photo-gallery flex justify-center flex-wrap">
						{images.map((image, index) => (
							<div
								key={index}
								className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2"
							>
								<PhotoView src={image.src}>
									<img
										src={image.src}
										alt={image.alt}
										className="rounded-lg drop-shadow-lg"
									/>
								</PhotoView>
							</div>
						))}
					</div>
				</PhotoProvider>
			</div>
		</div>
	);
});

export default About;
