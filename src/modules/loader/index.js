import * as actions from './actions/actions';
import * as constants from './constants/constants';
import * as actionTypes from './actions/actionTypes';
// import * as components from './components';
// import * as models from './models';
import reducer from './reducers/moduleLoaderReducer';

const contract = {
	reducer,
	actions,
	// models,
	constants,
	actionTypes,
	// components
};

module.exports = contract;
