import { test } from 'ava';
import { actionTypes, models } from '../../../../src/modules/todo/index';
import target from '../../../../src/modules/todo/reducers/todoReducer';

const initialState = { todos: [ { id: 1, completed: false } ] };

test('todoReducer should add a todo', t => {
	const newState = target(initialState, { type: actionTypes.ADD, payload: { id: 2, completed: true } });
	t.deepEqual(newState, { todos: [ { id: 2, completed: false }, { id: 1, completed: false } ] });
});

test('todoReducer should toggle the completed property of a todo', t => {
	const newState = target(initialState, { type: actionTypes.TOGGLE_COMPLETE, payload: { id: 1, completed: false } });
	t.deepEqual(newState, { todos: [ { id: 1, completed: true } ] });
});

test('todoReducer should a todo by id', t => {
	const newState = target(initialState, { type: actionTypes.REMOVE, payload: 1 });
	t.deepEqual(newState, { todos: [ ] });
});