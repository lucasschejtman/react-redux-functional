import R from 'ramda';
import * as Ru from '../../../utils/ramda-utils';
import * as t from '../actions/actionTypes';
import { handleActions } from 'redux-actions';
import initialState from './initialState';

// TODO: Maybe a todo model ?
const transformCompleted = R.evolve({ completed: R.not });

const toggleCompleted = (todos, todo) => {
	const todoLens = Ru.lensById(todo.id);
	return R.set(todoLens, transformCompleted(todo), todos);
};

const removeTodo = (state, id) => {
	return Ru.rejectById(id, state.todos);
};

const addTodo = (todos, todo) => {
	const toInsert = { id: Math.random(), ...todo, completed: false };
	return R.insert(todos.length, toInsert, todos);
};

const reducer = handleActions({
	[t.ADD]: (state, action) => ({
		todos: addTodo(state.todos, action.payload)
	}),
	[t.TOGGLE_COMPLETE]: (state, action) => ({
		todos: toggleCompleted(state.todos, action.payload)
	}),
	[t.REMOVE]: (state, action) => ({
		todos: removeTodo(state, action.payload)
	})
}, initialState);

export default reducer;