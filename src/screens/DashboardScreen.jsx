import React, { Component, Fragment } from 'react';
import {
	Button,
	AppBar,
	Toolbar,
	Typography,
	Paper,
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
	CircularProgress,
} from '@material-ui/core';
import { getQuotes } from 'services/quoteService';

class DashboardScreen extends Component {
	state = {};

	handleCreateQuote = () => {
		this.props.history.push('/quote');
	};

	handleOpenQuote = (id) => {
		// console.log('Clicked on quote', id);
		this.props.history.push(`/quote/load/${id}`);
	};

	async componentDidMount() {
		const quotes = await getQuotes();
		// console.log(quotes);
		this.setState({
			quotes,
		});
	}

	render() {
		return (
			<Fragment>
				<AppBar position="static">
					<Toolbar>
						<Typography variant="h6" color="inherit">
							TouchPoint Dashboard
						</Typography>
					</Toolbar>
				</AppBar>
				<div>
					{this.renderTable()}
					<div className="pageForm">
						<Button
							variant="contained"
							color="secondary"
							size="large"
							onClick={this.handleCreateQuote}
						>
							START NEW QUOTE
						</Button>
					</div>
				</div>
			</Fragment>
		);
	}

	renderTable = () => {
		if (this.state.quotes) {
			return (
				<Paper>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>First Name</TableCell>
								<TableCell>Last Name</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{this.state.quotes.map((quote) => {
								return (
									<TableRow
										key={quote.id}
										className="tableRow"
										onClick={() => this.handleOpenQuote(quote.id)}
									>
										<TableCell component="th" scope="row">
											{quote.firstName}
										</TableCell>
										<TableCell component="th" scope="row">
											{quote.lastName}
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</Paper>
			);
		} else {
			return (
				<div className="waitScreen">
					<CircularProgress />
				</div>
			);
		}
	};
}

export default DashboardScreen;
