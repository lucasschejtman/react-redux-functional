import R from 'ramda';
import { combineReducers } from 'redux';
import ApolloClient from 'apollo-client';
import { reducer as formReducer } from 'redux-form';

const reducer = (acc, contract) => {
	const module = require(`./${contract}`);
	return { ...acc, [module.constants.REDUCER_NAME] : module.reducer };
}

const client = new ApolloClient();
const reducers = R.reduce(reducer, {}, __MODULES__);
const rootReducer = combineReducers({ ...reducers, apollo: client.reducer(), form: formReducer });

export default rootReducer;
