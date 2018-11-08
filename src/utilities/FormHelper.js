import React from 'react';
import spected from 'spected';
import { TextField } from '@material-ui/core';
import _ from 'lodash';

export const validate = (values, validationRules) => {
	return getErrorsFromValidationResult(spected(validationRules, values));
};

export const getErrorsFromValidationResult = (validationResult) => {
	const FIRST_ERROR = 0;
	return Object.keys(validationResult).reduce((errors, field) => {
		return validationResult[field] !== true
			? { ...errors, [field]: validationResult[field][FIRST_ERROR] }
			: errors;
	}, {});
};

export const TpTextInput = (props) => {
	const { errors, values, handleChange, name, label, touched, handleBlur } = props;
	return (
		<div>
			<TextField
				id={name}
				name={name}
				label={label}
				type="input"
				margin="dense"
				variant="outlined"
				error={errors && touched[name] && !_.isEmpty(errors[name])}
				value={values[name]}
				onChange={handleChange}
				onBlur={handleBlur}
				helperText={errors && touched[name] && !_.isEmpty(errors[name]) ? errors[name] : ''}
			/>
		</div>
	);
};
