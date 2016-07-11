import * as actions from './actions/actions';
import * as constants from './constants/constants';
import * as actionTypes from './actions/actionTypes';
import * as components from './components';
import reducer from './reducers/todoReducer';

const contract = {
	reducers: reducer,
	actions: actions,
	constants: constants,
	actionTypes: actionTypes,
	components: components
};

module.exports = contract;