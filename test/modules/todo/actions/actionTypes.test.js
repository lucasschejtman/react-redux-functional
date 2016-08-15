import { test } from 'ava';
import { constants, actionTypes } from '../../../../src/modules/todo/index';

test('createActionType creates valid name', t => {
	const actionName = 'test';
	const result = actionTypes.createActionType(actionName);
	t.is(result, `${constants.MODULE_NAME}/${actionName}`);
});
