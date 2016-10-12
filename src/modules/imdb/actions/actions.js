import * as t from './actionTypes';
import { createAction } from 'redux-actions';

export const search = createAction(t.SEARCH, id => id);
