import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
	typography: {
		useNextVariants: true,
	},
	palette: {
		primary: {
			main: '#0d47a1',
		},
		secondary: {
			main: '#d32f2f',
		},
	},
});
