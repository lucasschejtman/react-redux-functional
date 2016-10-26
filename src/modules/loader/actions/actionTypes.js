import * as c from '../constants/constants';

export const createActionType = type => `${c.MODULE_NAME}/${type}`;

export const LOAD = createActionType('LOAD');
