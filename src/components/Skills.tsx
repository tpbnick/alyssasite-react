import CanvaPic from "../assets/skills/canva.webp";
import DavinciPic from "../assets/skills/davinci.webp";
import FacebookPic from "../assets/skills/fb.webp";
import HootSuitePic from "../assets/skills/hootsuite.webp";
import IllustratorPic from "../assets/skills/illustrator.webp";
import ShopifyPic from "../assets/skills/shopify.webp";
import InstaPic from "../assets/skills/insta.webp";
import LinkedIn from "../assets/skills/linkedin.webp";
import MailChimpPic from "../assets/skills/mailchimp.webp";
import PhotoshopPic from "../assets/skills/photoshop.webp";
import SurveyMonkeyPic from "../assets/skills/surveymonkey.webp";
import TwitterPic from "../assets/skills/twitter.webp";
import WixPic from "../assets/skills/wix.webp";
import WordpressPic from "../assets/skills/wordpress.webp";

const Skills = () => {
	const images = [
		{ src: CanvaPic, alt: "Canva" },
		{ src: DavinciPic, alt: "DaVinci Resolve" },
		{ src: FacebookPic, alt: "Facebook" },
		{ src: HootSuitePic, alt: "Hootsuite" },
		{ src: IllustratorPic, alt: "Adobe Illustrator" },
		{ src: ShopifyPic, alt: "Shopify" },
		{ src: InstaPic, alt: "Instagram" },
		{ src: LinkedIn, alt: "LinkedIn" },
		{ src: MailChimpPic, alt: "MailChimp" },
		{ src: PhotoshopPic, alt: "Adobe Photoshop" },
		{ src: SurveyMonkeyPic, alt: "Survey Monkey" },
		{ src: TwitterPic, alt: "Twitter" },
		{ src: WixPic, alt: "Wix" },
		{ src: WordpressPic, alt: "WordPress" },
	];

	return (
		<div className="px-10 lg:px-60 pb-10">
			<p className="py-10 text-black font-bold text-4xl">Skills 🛠️</p>
			<p className="text-black text-xl lg:text-3xl pb-10">
				I am proficient in the following technologies:
			</p>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4 justify-items-center pb-10">
				{images.map((image, i) => (
					<div
						key={i}
						className="relative w-32 h-32 overflow-hidden rounded-full drop-shadow-lg hover:scale-110 transition-transform duration-500 ease-in-out"
					>
						<img
							src={image.src}
							className="absolute top-0 bottom-0 left-0 right-0 w-auto h-32 m-auto object-contain transition duration-500 ease-in-out transform hover:scale-110"
							alt={image.alt}
						/>
						<div className="absolute inset-0 bg-purple-500 bg-opacity-70 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-500">
							<p className="text-white font-semibold text-xl text-center">
								{image.alt}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Skills;
