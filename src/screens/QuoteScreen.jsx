import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import GeneralInformationForm from 'forms/common/GeneralInformationForm';
import SfgPolicyInfoForm from 'forms/sfg/SfgPolicyInfoForm';
import { AppBar, Toolbar, Typography, CircularProgress } from '@material-ui/core';
import { saveQuote, getQuote } from 'services/quoteService';
import { toast } from 'react-toastify';

class QuoteScreen extends Component {
	state = { quote: {} };

	handleSubmit = async (quote, props) => {
		try {
			const updatedQuote = Object.assign(this.state.quote, quote);
			await saveQuote(updatedQuote);
			props.history.push(`/`);
		} catch (err) {
			toast.error('Your quote could not be saved.');
		}
	};

	async componentDidMount() {
		if (this.props.match.path === '/quote/load/:id') {
			try {
				const quote = await getQuote(this.props.match.params.id);
				this.setState({ quote });
				this.props.history.replace(`/quote/generalInformation`);
			} catch (err) {
				toast.error('The requested quote could not be found.');
				this.props.history.replace(`/`);
			}
		}
	}

	render() {
		return (
			<Fragment>
				<AppBar position="static">
					<Toolbar>
						<Typography variant="h6" color="inherit">
							TouchPoint Quote
						</Typography>
					</Toolbar>
				</AppBar>
				<Switch>
					<Route
						path="/quote/load/:id"
						render={() => (
							<div className="waitScreen">
								<CircularProgress />
							</div>
						)}
					/>
					<Route
						path="/quote/generalInformation"
						render={(props) => (
							<GeneralInformationForm
								{...props}
								quote={this.state.quote}
								handleSubmit={this.handleSubmit}
								next="sfgPolicyInfo"
							/>
						)}
					/>
					<Route
						path="/quote/sfgPolicyInfo"
						render={(props) => (
							<SfgPolicyInfoForm
								{...props}
								quote={this.state.quote}
								onSubmit={this.handleSubmit}
								back="generalInformation"
								next="sfgLocations"
							/>
						)}
					/>
					<Redirect to="/quote/generalInformation" />
				</Switch>
			</Fragment>
		);
	}
}

export default QuoteScreen;
