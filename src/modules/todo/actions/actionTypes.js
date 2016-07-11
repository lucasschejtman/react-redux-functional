import * as c from '../constants/constants';

const createActionType = type => `${c.MODULE_NAME}/${type}`;

export const ADD = createActionType('ADD');
export const REMOVE = createActionType('REMOVE');
export const TOGGLE_COMPLETE = createActionType('TOGGLE_COMPLETE');