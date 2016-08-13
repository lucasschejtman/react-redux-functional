import { test } from 'ava';
import sinon from 'sinon';
import proxyquire from 'proxyquire';
import * as todosModel from '../../../../src/modules/todo/models/todosModel';
import * as actionTypes from '../../../../src/modules/todo/actions/actionTypes';

const stubAndSpyOn = fn => {
	const todosModelStub = sinon.stub(todosModel, fn, () => {});
	return {
		stub: todosModelStub,
		target: proxyquire('../../../../src/modules/todo/reducers/todoReducer', {
					'../models/todosModel': todosModelStub
				}).default
	};
}

test('todoReducer should add a todo', t => {
	const testObj = stubAndSpyOn('add');
	testObj.target({}, { type: actionTypes.ADD, payload: { } });
	t.is(testObj.stub.add.calledOnce, true);
});

test('todoReducer should toggle the completed property of a todo', t => {
	const testObj = stubAndSpyOn('toggleCompleted');
	testObj.target({}, { type: actionTypes.TOGGLE_COMPLETE, payload: { } });
	t.is(testObj.stub.toggleCompleted.calledOnce, true);
});

test('todoReducer should a todo by id', t => {
	const testObj = stubAndSpyOn('remove');
	testObj.target({}, { type: actionTypes.REMOVE, payload: { } });
	t.is(testObj.stub.remove.calledOnce, true);
});