import R from 'ramda';
import React from 'react';
import { connect } from 'react-redux';
import { TodoList, TodoForm } from '../components';
import { actions } from '../index';

const mapStateToProps = (state) => {
	return R.pick(['todos'], state.todos);
};

const mapDispatchToProps = (dispatch) => {
	return {
		onTodoAdd: todo => dispatch(actions.add(todo)),
		onTodoClick: todo => dispatch(actions.toggle(todo)),
		onTodoDelete: id => dispatch(actions.remove(id))
	};
};

const TodoContainer = ({ todos, onTodoAdd, onTodoClick, onTodoDelete }) => (
 	<div className="col-1-1">
 		<div className="col-6-12">
 			<TodoForm onSubmit={onTodoAdd} />
		</div>
 		<div className="col-6-12">
			<TodoList todos={todos} onTodoClick={onTodoClick}  onTodoDelete={onTodoDelete} />
		</div>
	</div>
);

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);