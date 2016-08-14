import { test } from 'ava';
import { models } from '../../../../src/modules/todo/index';
import { required, notRequired } from '../../../../src/utils/validation';

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

test('todoModel validateFormFields validates all fields', t => {
	const values = { name: 'name', description: 'description' };
	const expected = { name: notRequired(), description: notRequired() };
	const result = todoModel.validateFormFields(values);
	t.deepEqual(result, expected);
});

test('todoModel validateFormFields validates all fields (no valid values)', t => {
	const values = { name: '', description: '' };
	const expected = { name: required(), description: required() };
	const result = todoModel.validateFormFields(values);
	t.deepEqual(result, expected);
});