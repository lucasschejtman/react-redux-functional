import { test } from 'ava';
import { models } from '../../../../src/modules/todo/index';

const { todosModel } = models;
const todos = [
	{ id: 1, name: 'name', completed: true }
];

test('todosModel should add a new todo', t => {
	const todo = { id: 2, name: 'name1', completed: false };
	const result = todosModel.add(todos, todo);
	t.is(result.length, 2);
	t.deepEqual(result[0], todo);
});

test('todosModel should remove a todo by id', t => {
	const result = todosModel.remove(todos[0].id, todos);
	t.deepEqual(result, []);
});

test('todosModel should toggle completed flag', t => {
	const result = todosModel.toggleCompleted(todos, todos[0]);
	t.deepEqual(result, [{ id: 1, name: 'name', completed: false }]);
});