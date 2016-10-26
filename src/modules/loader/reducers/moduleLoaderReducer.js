import * as t from '../actions/actionTypes';
import { handleActions } from 'redux-actions';
import initialState from './initialState';

const reducer = handleActions({
  [t.LOAD]: (state, action) => ({
    ...state,
    module: action.payload
  })
}, initialState);

export default reducer;
