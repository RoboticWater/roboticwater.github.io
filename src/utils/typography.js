import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
	baseColor: "#1E1E1E",
	bodyWeight: 400,
  baseLineHeight: 1.666,
  headerWeight: 900,
  headerColor: "#1E1E1E",
  headerFontFamily: [
    'Raleway'
  ],
	bodyFontFamily: ["Roboto Condensed", "sans-serif"],
	googleFonts: [
		{
			name: 'Roboto Condensed',
			styles: [
				'300',
				'400',
			],
		},
		{
			name: 'Raleway',
			styles: [
				'900',
			],
		},
	],
})

if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography