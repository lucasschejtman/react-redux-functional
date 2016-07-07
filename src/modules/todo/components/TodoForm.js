import React, { PropTypes, Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class TodoForm extends Component {
	constructor() {
		super();
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.onSubmit({ ...this.state });
	}

	handleNameChange(e) {
		this.setState({ name: e.target.value });
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<div>
					<TextField name="name" hintText="Name" floatingLabelText="Name" onChange={this.handleNameChange.bind(this)} />
					<RaisedButton type="submit" label="Add" />
				</div>
			</form>
		)
	}
}

TodoForm.propTypes = {
 	onSubmit: PropTypes.func.isRequired
};

export default TodoForm;
