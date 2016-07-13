import R from 'ramda';
import * as Ru from 'utils/ramda-utils';
import React, { PropTypes, Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class TodoForm extends Component {
	constructor() {
		super();
	}

	handleSubmit(e) {
		e.preventDefault();

		const el = this.refs.name;
		const focusEl = element => element.focus();
		const submit = () => this.props.onSubmit({ ...this.state });

		const handleClick = R.ifElse(Ru.isInputEmpty, focusEl, submit);

		handleClick(el);
	}

	handleNameChange(e) {
		this.setState({ name: e.target.value });
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<div>
					<TextField
						name="name"
						ref="name"
						hintText="Name"
						floatingLabelText="Name"
						onChange={this.handleNameChange.bind(this)} />
					<RaisedButton type="submit" label="Add" />
				</div>
			</form>
		);
	}
}

TodoForm.propTypes = {
 	onSubmit: PropTypes.func.isRequired
};

export default TodoForm;
