import * as t from './actionTypes';
import { createAction } from 'redux-actions';

export const load = createAction(t.LOAD, module => module);
