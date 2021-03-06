import * as t from '../actions/actionTypes';
import { handleActions } from 'redux-actions';
import initialState from './initialState';

const reducer = handleActions({
  [t.SEARCH]: (state, action) => ({
    id: action.payload.id
  })
}, initialState);

export default reducer;
