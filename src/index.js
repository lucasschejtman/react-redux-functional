import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import { Router, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from "react-tap-event-plugin";
import routes from './routes';

injectTapEventPlugin();

const store = configureStore();
const rootEl = document.getElementById('app');

let componentEl;

if(process.env.NODE_ENV !== 'production') {
	const DevTools = require('./redux/DevTools').default;

	componentEl = (
		<div>
			<Router history={browserHistory} routes={routes} />
			<DevTools />
		</div>
	);
} else {
	componentEl = (
		<div>
			<Router history={browserHistory} routes={routes} />
		</div>
	);
}

ReactDOM.render(
	<MuiThemeProvider>
		<Provider store={store}>
			{componentEl}
		</Provider>
	</MuiThemeProvider>,
	rootEl
);