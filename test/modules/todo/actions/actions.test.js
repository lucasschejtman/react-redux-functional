import { test } from 'ava';
import { actions, actionTypes } from '../../../../src/modules/todo/index';

test('ADD action', t => {
	const todo = { id: 1, name: 'name' };
	const expected = { type: actionTypes.ADD, payload: todo };
	const result = actions.add(todo);

	t.deepEqual(result, expected);
});

test('REMOVE action', t => {
	const todoId = 1;
	const expected = { type: actionTypes.REMOVE, payload: todoId };
	const result = actions.remove(todoId);

	t.deepEqual(result, expected);
});

test('TOGGLE action', t => {
	const todoId = 1;
	const expected = { type: actionTypes.TOGGLE_COMPLETE, payload: todoId };
	const result = actions.toggle(todoId);

	t.deepEqual(result, expected);
});
