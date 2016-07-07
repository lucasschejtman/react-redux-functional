import React, { PropTypes } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

const TodoList = ({ todos, onTodoAdd, onTodoClick, onTodoDelete }) => (
	<List>
		<Subheader>TODO</Subheader>
		<TodoForm onSubmit={onTodoAdd} />
		{
			todos.map(todo =>
			<TodoItem key={todo.id} {...todo}
				onClick={() => onTodoClick(todo)}
				onDelete={() => onTodoDelete(todo.id)} />) 
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
