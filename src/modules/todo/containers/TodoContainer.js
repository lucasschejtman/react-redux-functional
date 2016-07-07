import R from 'ramda';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import * as actions from '../actions/actions';

const mapStateToProps = (state) => {
	return R.pick(['todos'], state.todos);
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTodoAdd: todo => dispatch(actions.add(todo)),
		onTodoClick: todo => dispatch(actions.toggle(todo)),
		onTodoDelete: id => dispatch(actions.remove(id))
	};
}

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodoContainer;