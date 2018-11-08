import React from 'react';
import { withFormik } from 'formik';

const validationRules = {
	firstName: [[(value) => !_.isEmpty(value), 'First name is required!']],
};

const validate = (values) => {
	// console.log('Val', getErrorsFromValidationResult(spected(validationRules, values)));
	return getErrorsFromValidationResult(spected(validationRules, values));
};

const getErrorsFromValidationResult = (validationResult) => {
	const FIRST_ERROR = 0;
	return Object.keys(validationResult).reduce((errors, field) => {
		return validationResult[field] !== true
			? { ...errors, [field]: validationResult[field][FIRST_ERROR] }
			: errors;
	}, {});
};

const FormFields = ({ values, handleChange }) => {
	// console.log('Form', props);
	return <h2>Next form!</h2>;
};

const SfgPolicyInfoForm = withFormik({
	mapPropsToValues(props) {
		// console.log('Map', props);
		return {
			firstName: props.quote.firstName,
		};
	},
	validate(values) {
		// console.log('Validate', props);
		return validate(values);
	},
	handleSubmit(values, { props }) {
		// console.log('Submit', props);
		return props.handleSubmit(values);
	},
})(FormFields);

export default SfgPolicyInfoForm;
