import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import * as actions from '../actions/actions';

const mapStateToProps = (state) => {
	return {
		...state.todos
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTodoClick: (id) => {
			dispatch(actions.toggle(id));
		},
		onDeleteClick: (id) => {
			dispatch(actions.remove(id));
		}
	};
}

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodoContainer;