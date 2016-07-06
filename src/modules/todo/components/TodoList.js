import React, { PropTypes } from 'react';
import TodoItem from './TodoItem';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

const TodoList = ({ todos, onTodoClick, onDeleteClick }) => (
	<List>
		<Subheader>TODO</Subheader>
		{ todos.map(todo =>
			<TodoItem key={todo.id} {...todo}
				onClick={() => onTodoClick(todo.id)}
				onDelete={() => onDeleteClick(todo.id)} />) }
	</List>
);

TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired
	}).isRequired).isRequired,
	onTodoClick: PropTypes.func.isRequired,
	onDeleteClick: PropTypes.func.isRequired
};

export default TodoList;
