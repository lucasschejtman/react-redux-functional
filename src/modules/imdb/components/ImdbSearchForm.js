import React, { PropTypes } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'material-ui';
import { reduxForm } from 'redux-form';

const formConfig = {
	form: 'imdbSearchForm',
	fields: ['id']
};

const ImdbSearchForm = ({ handleSubmit, fields: { id } }) =>
(
	<form onSubmit={handleSubmit}>
		<div>
			<TextField name="id" hintText="id" fullWidth={true} {...id} />
			<RaisedButton type="submit" label="Search" />
		</div>
	</form>
);

ImdbSearchForm.propTypes = {
	fields: PropTypes.object.isRequired,
 	handleSubmit: PropTypes.func.isRequired
};

export default reduxForm(formConfig)(ImdbSearchForm);
