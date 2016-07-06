import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../modules/reducers';
import { persistState } from 'redux-devtools';

function configureStore(initialState) {
	let middleware = applyMiddleware();
	let enhancer;

	if(process.env.NODE_ENV !== 'production') {
		const getDebugSessionKey = () => {
			const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
			return (matches && matches.length) ? matches[1] : null;
		};

		enhancer = compose(
			middleware,
			window.devToolsExtension ? window.devToolsExtension() : require('./DevTools').default.instrument(),
			persistState(getDebugSessionKey())
		);
	} else {
		enhancer = compose(middleware);
	}

	const store = createStore(rootReducer, initialState, enhancer);

	if (module.hot) {
		module.hot.accept('../modules/reducers', () => {
			store.replaceReducer(require('../modules/reducers').default)
		});
	}

	return store;
}

export default configureStore;