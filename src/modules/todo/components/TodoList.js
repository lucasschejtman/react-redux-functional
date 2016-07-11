import R from 'ramda';
import React, { PropTypes } from 'react';
import { TodoItem, TodoForm } from './index';
import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

const RenderTodoItem = R.curry((onTodoClick, onTodoDelete, todo) =>
	<TodoItem key={todo.id} {...todo} onClick={() => onTodoClick(todo)} onDelete={() => onTodoDelete(todo.id)} />
);

const TodoList = ({ todos, onTodoAdd, onTodoClick, onTodoDelete }) => (
	<List>
		<Subheader>TODO</Subheader>
		<TodoForm onSubmit={onTodoAdd} />
		{
			todos.map(RenderTodoItem(onTodoClick, onTodoDelete))
		}
	</List>
);

TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired
	}).isRequired).isRequired,
	onTodoAdd: PropTypes.func.isRequired,
	onTodoClick: PropTypes.func.isRequired,
	onTodoDelete: PropTypes.func.isRequired
};

export default TodoList;
