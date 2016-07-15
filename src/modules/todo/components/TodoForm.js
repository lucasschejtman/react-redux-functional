import { Field, reduxForm } from 'redux-form';
import React, { PropTypes } from 'react';
import * as validation from 'utils/validation';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const fields = ['name'];
const validate = values => {
	return {
		name: validation.notEmpty(values.name)
	};
};

const TodoForm = ({ handleSubmit, fields: { name } }) =>
(
	<form onSubmit={handleSubmit}>
		<div>
			<input type="text" name="name" {...name} />
			<RaisedButton type="submit" label="Add" style={{ 'flexGrow': 1 }} />
		</div>
	</form>
);

TodoForm.propTypes = {
	fields: PropTypes.object.isRequired,
 	handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({ form: 'todoForm', fields, validate })(TodoForm);
