/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				sm: "425px", // Adjust the 'sm' breakpoint to 425px
			},
		},
		container: {
			center: true,
		},
	},
	plugins: [],
};
