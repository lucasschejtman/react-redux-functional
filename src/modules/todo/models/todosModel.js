import R from 'ramda';
import * as Ru from '../../../utils/ramda-utils';
import { transformCompleted } from './todoModel';

export const add = (todos, todo) => {
	const toInsert = { id: Math.random(), ...todo, completed: false };
	return R.insert(todos.length, toInsert, todos);
};

export const remove = (todos, todoId) => {
	return Ru.rejectById(todoId, todos);
};

export const toggleCompleted = (todos, todo) => {
	const todoLens = Ru.lensById(todo.id);
	return R.set(todoLens, transformCompleted(todo), todos);
};