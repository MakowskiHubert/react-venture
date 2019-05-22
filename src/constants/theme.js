export const theme = {
	colors: {
		primary_dark: '#007FFF',
		primary: '#2280FF',
		secondary: '#099CDB',
		border: '#C7C7C7',
		gray: '#3C3C3C',
		light_gray: '#A9A9A9',
		light_gray_1: '#888888',
		light_gray_2: '#CCCCCC',
		error: '#FF0000'
	},
	filters: {
		saturate: 'saturate(3)',
		grayscale: 'grayscale(100%)',
		contrast: 'contrast(160%)',
		brightness: 'brightness(0.25)',
		blur: 'blur(3px)',
		invert: 'invert(100%)',
		sepia: 'sepia(100%)',
		huerotate: 'hue-rotate(180deg)',
		opacity: 'opacity(50%)'
	},
	/* for width and height pattern: 100 * px / vmax */
	size: {
		5: '0.39vmax',
		10: '0.78vmax',
		20: '1.56vmax',
		24: '1.87vmax',
		30: '2.34vmax',
		40: '3.12vmax',
		48: '3.75vmax',
		50: '3.90vmax',
		62: '4.84vmax',
		70: '5.47vmax',
		80: '6.25vmax', // top bar
		90: '7vmax',
		100: '7.81vmax',
		150: '11.72vmax',
		200: '15.62vmax',
		112: '8.75vmax', // bottom bar
	}
};