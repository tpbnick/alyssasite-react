import { useState, useEffect, forwardRef } from "react";
import { Carousel } from "react-responsive-carousel";

import ReactPlayer from "react-player";
import Lightbox from "yet-another-react-lightbox";
import PhotoAlbum from "react-photo-album";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Chidog from "../assets/portfolio/chidog.webp";
import Chidog2 from "../assets/portfolio/chidog2.webp";
import Chidog3 from "../assets/portfolio/chidog3.webp";
import Chidog4 from "../assets/portfolio/chidog4.webp";
import Chidog5 from "../assets/portfolio/chidog5.webp";
import Glass from "../assets/portfolio/glass.webp";
import Glass2 from "../assets/portfolio/glass2.webp";
import Labarge from "../assets/portfolio/labarge1.webp";
import Labarge2 from "../assets/portfolio/labarge2.webp";
import Labarge3 from "../assets/portfolio/labarge3.webp";
import Labarge4 from "../assets/portfolio/labarge4.webp";
import Labarge5 from "../assets/portfolio/labarge5.webp";
import Labarge6 from "../assets/portfolio/labarge6.webp";
import Labarge7 from "../assets/portfolio/labarge7.webp";
import Soccer from "../assets/portfolio/soccer.webp";
import Tower from "../assets/portfolio/tower1.webp";
import Tower2 from "../assets/portfolio/tower2.webp";

import ChidogVideo from "../assets/portfolio/videos/chidog-food.mp4";
import ChidogVideo2 from "../assets/portfolio/videos/chidog-food2.mp4";
import LabargeVideo from "../assets/portfolio/videos/labarge.mp4";
import LabargeVideo2 from "../assets/portfolio/videos/labarge2.mp4";

const Portfolio = forwardRef<HTMLDivElement>((_props, ref) => {
	const [index, setIndex] = useState(-1);
	const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 800);

	useEffect(() => {
		setIsSmallScreen(window.innerWidth < 800);

		const handleResize = () => {
			setIsSmallScreen(window.innerWidth < 800);
		};

		// Attach the event listener
		window.addEventListener("resize", handleResize);

		// Cleanup
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const images = [
		{ src: Chidog, width: 1080, height: 1080 },
		{ src: Chidog2, width: 1080, height: 1080 },
		{ src: Chidog3, width: 1080, height: 1080 },
		{ src: Chidog4, width: 1080, height: 1080 },
		{ src: Chidog5, width: 1080, height: 1080 },
		{ src: Glass, width: 940, height: 788 },
		{ src: Glass2, width: 1080, height: 1080 },
		{ src: Labarge, width: 750, height: 600 },
		{ src: Labarge2, width: 3024, height: 4032 },
		{ src: Labarge3, width: 4032, height: 3024 },
		{ src: Labarge4, width: 1950, height: 2700 },
		{ src: Labarge5, width: 1950, height: 2700 },
		{ src: Labarge6, width: 1428, height: 2000 },
		{ src: Labarge7, width: 1428, height: 2000 },
		{ src: Soccer, width: 300, height: 250 },
		{ src: Tower, width: 1545, height: 2000 },
		{ src: Tower2, width: 1545, height: 2000 },
	];

	const carouselImages = [
		{ src: Chidog, alt: "chidog" },
		{ src: Chidog2, alt: "chidog 2" },
		{ src: Chidog3, alt: "chidog 3" },
		{ src: Chidog4, alt: "chidog 4" },
		{ src: Chidog5, alt: "chidog 5" },
		{ src: Glass, alt: "glass" },
		{ src: Glass2, alt: "glass 2" },
		{ src: Labarge, alt: "labarge" },
		{ src: Labarge2, alt: "labarge 2" },
		{ src: Labarge3, alt: "labarge 3" },
		{ src: Labarge4, alt: "labarge 4" },
		{ src: Labarge5, alt: "labarge 5" },
		{ src: Labarge6, alt: "labarge 6" },
		{ src: Labarge7, alt: "labarge 7" },
		{ src: Soccer, alt: "soccer" },
		{ src: Tower, alt: "tower" },
		{ src: Tower2, alt: "tower 2" },
	];

	const carouselVideos = [
		{ src: ChidogVideo, alt: "ChiDog Video" },
		{ src: ChidogVideo2, alt: "ChiDog Video 2" },
		{ src: LabargeVideo, alt: "Labarge Video" },
		{ src: LabargeVideo2, alt: "Labarge Video 2" },
	];

	return (
		<div ref={ref} className="px-10 lg:px-60 pb-10">
			<p className="py-10 text-black font-bold text-4xl">Portfolio 🎨</p>
			<p className="text-black text-xl lg:text-3xl pb-10">
				Please click on an image/video below to see the full resolution:
			</p>
			<div>
				{isSmallScreen ? (
					<Carousel
						showThumbs={true}
						dynamicHeight={true}
						autoPlay={true}
						interval={5000}
						swipeable={true}
						emulateTouch={true}
						infiniteLoop={true}
					>
						{carouselImages.map((image, i) => (
							<div key={i}>
								<img
									src={image.src}
									alt={image.alt}
									style={{ width: "100%", height: "auto" }}
								/>
							</div>
						))}
					</Carousel>
				) : (
					<div className="drop-shadow-lg">
						<PhotoAlbum
							photos={images}
							layout="columns"
							targetRowHeight={250}
							onClick={({ index }) => setIndex(index)}
							componentsProps={(containerWidth) => ({
								imageProps: { loading: (containerWidth || 0) > 600 ? "lazy" : "lazy" },
								className: "rounded-lg transform hover:scale-105 transition-transform",
							})}
						/>

						<Lightbox
							slides={images}
							open={index >= 0}
							index={index}
							close={() => setIndex(-1)}
							plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
						/>
					</div>
				)}
			</div>
			<div className="w-full md:w-1/2 lg:w-1/3 mx-auto pt-10 drop-shadow-lg">
				<Carousel
					showThumbs={true}
					autoPlay={true}
					interval={5000}
					swipeable={true}
					emulateTouch={true}
					infiniteLoop={true}
				>
					{carouselVideos.map((video, i) => (
						<div key={i} style={{ position: "relative", paddingTop: "100%" }}>
							<ReactPlayer
								url={video.src}
								width="100%"
								height="100%"
								controls={true}
								muted={true}
								playing={true}
								loop={true}
								style={{ position: "absolute", top: "0", left: "0" }}
							/>
						</div>
					))}
				</Carousel>
			</div>
		</div>
	);
});

export default Portfolio;
