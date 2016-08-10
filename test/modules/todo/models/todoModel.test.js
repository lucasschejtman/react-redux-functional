import { test } from 'ava';
import { models } from '../../../../src/modules/todo/index';

const { todoModel } = models;

test('todoModel should negate completed property', t => {
	const model = { id: 1, completed: false };
	const result = todoModel.transformCompleted(model);
	t.is(result.completed, !model.completed);
});

test('todoModel name field isValid true when meeting criteria', t => {
	const name = "name";
	const result = todoModel.formFields.name.isValid(name);
	t.is(result, true);
});

test('todoModel name field isValid false when not meeting criteria', t => {
	const name = "";
	const result = todoModel.formFields.name.isValid(name);
	t.is(result, false);
});

test('todoModel description field isValid true when meeting criteria', t => {
	const description = "description";
	const result = todoModel.formFields.description.isValid(description);
	t.is(result, true);
});

test('todoModel description field isValid false when not meeting criteria', t => {
	const description = "";
	const result = todoModel.formFields.description.isValid(description);
	t.is(result, false);
});