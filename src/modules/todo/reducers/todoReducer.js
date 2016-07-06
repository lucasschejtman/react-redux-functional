import * as t from '../actions/actionTypes';
import { handleActions } from 'redux-actions';

const initialState = {
	todos: [
		{
			id: 1,
			name: 'react',
			completed: true
		},
		{
			id: 2,
			name: 'redux',
			completed: false
		}
	]
};

const todo = (state, action) => {
	switch (action.type) {
		case t.ADD:
			return {
				id: 3,
				name: action.payload,
				complete: false
			};
		case t.TOGGLE_COMPLETE:
			if (state.id !== action.payload) {
				return state;
			}

			return Object.assign({}, state, {
				completed: !state.completed
			});
		case t.REMOVE:
			return state.id !== action.payload;
		default:
			return state;
	}
};

const reducer = handleActions({
	[t.ADD]: (state, action) => ({
		todos: [...state, todo(undefined, action)]
	}),
	[t.TOGGLE_COMPLETE]: (state, action) => ({
		todos: state.todos.map(td => todo(td, action))
	}),
	[t.REMOVE]: (state, action) => ({
		todos: state.todos.filter(td => todo(td, action))
	})
}, initialState);

export default reducer;