import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Route, Switch, Redirect } from 'react-router-dom';
import DashboardScreen from 'screens/DashboardScreen';
import QuoteScreen from 'screens/QuoteScreen';
import GlobalStyle from 'styles/GlobalStyle';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from 'styles/theme';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

export default class App extends Component {
	state = {};

	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<GlobalStyle />
				<ToastContainer />
				<div>
					<a href="/">
						<img src="http://cig/TouchPoint/img/CIG-logo.png" alt="Columbia Insurance Group" />
					</a>
				</div>
				<Switch>
					<Route path="/quote/load/:id" render={(props) => <QuoteScreen {...props} />} />
					<Route path="/quote" component={QuoteScreen} />
					<Route path="/" exact component={DashboardScreen} />
					<Redirect to="/" />
				</Switch>
			</MuiThemeProvider>
		);
	}
}
