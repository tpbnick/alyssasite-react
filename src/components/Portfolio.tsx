import { useState, useEffect, useCallback, forwardRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ReactPlayer from "react-player";
import PhotoAlbum from "react-photo-album";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

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

const images = [
	{ src: Chidog, width: 1080, height: 1080, alt: "ChiDog" },
	{ src: Chidog2, width: 1080, height: 1080, alt: "ChiDog 2" },
	{ src: Chidog3, width: 1080, height: 1080, alt: "ChiDog 3" },
	{ src: Chidog4, width: 1080, height: 1080, alt: "ChiDog 4" },
	{ src: Chidog5, width: 1080, height: 1080, alt: "ChiDog 5" },
	{ src: Glass, width: 940, height: 788, alt: "Glass" },
	{ src: Glass2, width: 1080, height: 1080, alt: "Glass 2" },
	{ src: Labarge, width: 750, height: 600, alt: "LaBarge" },
	{ src: Labarge2, width: 3024, height: 4032, alt: "LaBarge 2" },
	{ src: Labarge3, width: 4032, height: 3024, alt: "LaBarge 3" },
	{ src: Labarge4, width: 1950, height: 2700, alt: "LaBarge 4" },
	{ src: Labarge5, width: 1950, height: 2700, alt: "LaBarge 5" },
	{ src: Labarge6, width: 1428, height: 2000, alt: "LaBarge 6" },
	{ src: Labarge7, width: 1428, height: 2000, alt: "LaBarge 7" },
	{ src: Soccer, width: 300, height: 250, alt: "Soccer" },
	{ src: Tower, width: 1545, height: 2000, alt: "Tower" },
	{ src: Tower2, width: 1545, height: 2000, alt: "Tower 2" },
];

const videos = [
	{
		src: "https://cdn.nickplatt.dev/files/Misc/alyssa/Portfolio-Videos/chidog-food.mp4",
		alt: "ChiDog Video",
	},
	{
		src: "https://cdn.nickplatt.dev/files/Misc/alyssa/Portfolio-Videos/chidog-food2.mp4",
		alt: "ChiDog Video 2",
	},
	{
		src: "https://cdn.nickplatt.dev/files/Misc/alyssa/Portfolio-Videos/labarge.mp4",
		alt: "LaBarge Video",
	},
	{
		src: "https://cdn.nickplatt.dev/files/Misc/alyssa/Portfolio-Videos/labarge2.mp4",
		alt: "LaBarge Video 2",
	},
];

const arrowClass =
	"absolute top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-pinkish text-purple-950 rounded-full w-9 h-9 flex items-center justify-center drop-shadow-md transition-colors duration-200";

const CarouselArrows = ({
	onPrev,
	onNext,
}: {
	onPrev: () => void;
	onNext: () => void;
}) => (
	<>
		<button onClick={onPrev} aria-label="Previous" className={`${arrowClass} left-2`}>
			<FontAwesomeIcon icon={faChevronLeft} size="sm" />
		</button>
		<button onClick={onNext} aria-label="Next" className={`${arrowClass} right-2`}>
			<FontAwesomeIcon icon={faChevronRight} size="sm" />
		</button>
	</>
);

const DotNav = ({
	count,
	selected,
	onSelect,
}: {
	count: number;
	selected: number;
	onSelect: (i: number) => void;
}) => (
	<div className="flex justify-center gap-2 mt-3">
		{Array.from({ length: count }).map((_, i) => (
			<button
				key={i}
				onClick={() => onSelect(i)}
				aria-label={`Go to slide ${i + 1}`}
				className={`rounded-full transition-all duration-200 ${
					i === selected ? "bg-pinkish w-4 h-3" : "bg-gray-300 w-3 h-3"
				}`}
			/>
		))}
	</div>
);

const ImageCarousel = () => {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
		Autoplay({ delay: 5000, stopOnInteraction: false }),
	]);
	const [selectedIndex, setSelectedIndex] = useState(0);

	useEffect(() => {
		if (!emblaApi) return;
		const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
		emblaApi.on("select", onSelect);
		return () => {
			emblaApi.off("select", onSelect);
		};
	}, [emblaApi]);

	const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
	const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

	return (
		<div>
			<div className="relative rounded-lg overflow-hidden drop-shadow-lg">
				<div ref={emblaRef} className="overflow-hidden select-none">
					<div className="flex">
						{images.map((image, i) => (
							<div key={i} className="flex-none w-full">
								<img
									src={image.src}
									alt={image.alt}
									draggable="false"
									className="w-full h-auto block pointer-events-none"
								/>
							</div>
						))}
					</div>
				</div>
				<CarouselArrows onPrev={scrollPrev} onNext={scrollNext} />
			</div>
			<div className="text-center mt-3 text-sm text-gray-500">
				{selectedIndex + 1} / {images.length}
			</div>
		</div>
	);
};

const VideoCarousel = () => {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
	const [selectedIndex, setSelectedIndex] = useState(0);

	useEffect(() => {
		if (!emblaApi) return;
		const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
		emblaApi.on("select", onSelect);
		return () => {
			emblaApi.off("select", onSelect);
		};
	}, [emblaApi]);

	const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
	const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

	return (
		<div>
			<div className="relative rounded-lg overflow-hidden drop-shadow-lg">
				<div ref={emblaRef} className="overflow-hidden select-none">
					<div className="flex">
						{videos.map((video, i) => (
							<div key={i} className="flex-none w-full relative aspect-square">
								<ReactPlayer
									url={video.src}
									width="100%"
									height="100%"
									controls
									muted
									playing={i === selectedIndex}
									loop
									style={{ position: "absolute", top: 0, left: 0 }}
								/>
							</div>
						))}
					</div>
				</div>
				<CarouselArrows onPrev={scrollPrev} onNext={scrollNext} />
			</div>
			<DotNav
				count={videos.length}
				selected={selectedIndex}
				onSelect={(i) => emblaApi?.scrollTo(i)}
			/>
		</div>
	);
};

const Portfolio = forwardRef<HTMLDivElement>((_props, ref) => {
	return (
		<div ref={ref} className="px-4 sm:px-6 lg:px-16 pb-10">
			<p className="py-10 text-black font-bold text-4xl">Portfolio 🎨</p>
			<p className="text-black text-xl lg:text-3xl pb-10">
				Click any image to view full size:
			</p>

			{/* Mobile: swipeable carousel */}
			<div className="block md:hidden">
				<ImageCarousel />
			</div>

			{/* Desktop: masonry grid with react-photo-view lightbox */}
			<div className="hidden md:block">
				<PhotoProvider>
					<PhotoAlbum
						photos={images}
						layout="columns"
						targetRowHeight={250}
						renderPhoto={({ photo, imageProps: { style, ...restImageProps } }) => (
							<PhotoView key={photo.src} src={photo.src}>
								<img
									{...restImageProps}
									style={style}
									loading="lazy"
									className="cursor-pointer hover:brightness-95 transition-[filter] duration-200"
								/>
							</PhotoView>
						)}
					/>
				</PhotoProvider>
			</div>

			{/* Videos */}
			<div className="w-full sm:w-2/3 md:w-1/2 lg:w-5/12 xl:w-1/3 mx-auto pt-10">
				<VideoCarousel />
			</div>
		</div>
	);
});

export default Portfolio;
