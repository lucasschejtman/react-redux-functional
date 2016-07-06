import * as t from './actionTypes';
import { createAction } from 'redux-actions';

export const add = createAction(t.ADD, name => name);
export const remove = createAction(t.REMOVE, id => id);
export const toggle = createAction(t.TOGGLE_COMPLETE, id => id);