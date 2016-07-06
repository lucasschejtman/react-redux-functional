import { combineReducers } from 'redux';
//TODO: Dynamic Load
import { reducers as todos } from './todo';

const rootReducer = combineReducers({
	todos
});

export default rootReducer;