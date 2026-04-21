module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: "media",
	theme: {
		extend: {
			colors: {
				pinkish: "#dbbdd3",
				orangeish: "#f9e7bf",
				yellowish: "#cab484",
				socials: "#bc9dca",
			},
			fontFamily: {
				belleza: ["Belleza", "sans-serif"],
			},
			boxShadow: {
				lyssShadow: "rgb(0 0 0 / 45%) 0px 25px 20px -20px",
			},
		},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),
		require("daisyui"),
	],
};
