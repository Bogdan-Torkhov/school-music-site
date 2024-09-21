import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
	palette: {
		primary: {
			main: '#6272a4', // Dracula's primary color
		},
		secondary: {
			main: '#ff79c6', // Dracula's secondary color
		},
		background: {
			default: '#282a36', // Dracula's background
		},
		text: {
			primary: '#bd93f9', // Purple text color
		},
	},
	typography: {
		h1: {
			fontSize: '3rem',
			fontWeight: 700,
			color: '#bd93f9',
		},
		h4: {
			fontSize: '1.5rem',
			color: '#bd93f9',
		},
		body1: {
			fontSize: '1.2rem',
			color: '#bd93f9',
		},
	},
});
