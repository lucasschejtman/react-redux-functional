import { Field, reduxForm } from 'redux-form';
import React, { PropTypes } from 'react';
import { todoModel } from '../models';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'material-ui';

const fields = ['name', 'description'];
const validate = values => {
	return {
		name: todoModel.validateName(values.name)
	};
};

const TodoForm = ({ handleSubmit, fields: { name, description } }) =>
(
	<form onSubmit={handleSubmit}>
		<div>
			<TextField name="name" hintText="Name" fullWidth={true} {...name} />
			<TextField name="description" hintText="Description" rowsMax={2} fullWidth={true}
						multiLine={true} {...description} />
			<RaisedButton type="submit" label="Add" />
		</div>
	</form>
);

TodoForm.propTypes = {
	fields: PropTypes.object.isRequired,
 	handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({ form: 'todoForm', fields, validate })(TodoForm);
