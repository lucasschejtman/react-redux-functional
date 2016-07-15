import * as todos from '../models/todosModel';
import * as t from '../actions/actionTypes';
import { handleActions } from 'redux-actions';
import initialState from './initialState';

const reducer = handleActions({
	[t.ADD]: (state, action) => ({
		todos: todos.add(state.todos, action.payload)
	}),
	[t.TOGGLE_COMPLETE]: (state, action) => ({
		todos: todos.toggleCompleted(state.todos, action.payload)
	}),
	[t.REMOVE]: (state, action) => ({
		todos: todos.remove(state.todos, action.payload)
	})
}, initialState);

export default reducer;