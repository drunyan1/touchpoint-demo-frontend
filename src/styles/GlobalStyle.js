import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
      background: #FFF
		}
		body {
			margin: 0
			font-family: "Roboto", "Helvetica", "Arial", sans-serif;
		}
		div.pageForm {
			margin: 1em 2em;
		}
		div.waitScreen {
			text-align: center;
			margin: 3em auto;
		}
		tr.tableRow {
			cursor: pointer;
		}
		tr.tableRow:hover {
			background-color: #DDD;
		}
`;

export default GlobalStyle;
