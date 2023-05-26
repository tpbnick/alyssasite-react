module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

	darkMode: "media",
	theme: {
		extend: {
			textColor: ["responsive", "hover", "focus"],
			colors: {
				pinkish: "#dbbdd3",
				orangeish: "#f9e7bf",
				yellowish: "#cab484",
				socials: "#bc9dca",
			},
		},
		fontFamily: {
			belleza: ["Belleza", "normal"],
		},
		boxShadow: {
			lyssShadow: "rgb(0 0 0 / 45%) 0px 25px 20px -20px",
		},
		translate: {
			full: "100%",
			"-full": "-100%",
		},
		visibility: ["hover", "focus", "group-hover"],
	},
	variants: {
		extend: {},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),
		require("daisyui"),
	],
};
