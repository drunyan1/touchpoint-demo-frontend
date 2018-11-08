import React from 'react';
import { withFormik, Form } from 'formik';
import { Button, Grid } from '@material-ui/core';
import _ from 'lodash';
import { validate } from 'utilities/FormHelper';
import { TpTextInput } from '../../utilities/FormHelper';

const validationRules = {
	firstName: [[(value) => !_.isEmpty(value), 'First name is required!']],
	lastName: [[(value) => !_.isEmpty(value), 'Last name is required!']],
};

const FormFields = (props) => {
	return (
		<div className="pageForm">
			<h2>Insured Information</h2>
			<Form>
				<Grid container spacing={32}>
					<Grid item>
						<TpTextInput name="firstName" label="First Name" {...props} />
					</Grid>
					<Grid item>
						<TpTextInput name="lastName" label="Last Name" {...props} />
					</Grid>
				</Grid>
				<p />
				<Button variant="contained" color="secondary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
};

const GeneralInformationForm = withFormik({
	mapPropsToValues(props) {
		return {
			firstName: props.quote.firstName || '',
			lastName: props.quote.lastName || '',
		};
	},
	validate(values) {
		return validate(values, validationRules);
	},
	handleSubmit(values, { props }) {
		return props.handleSubmit(values, props);
	},
})(FormFields);

export default GeneralInformationForm;
