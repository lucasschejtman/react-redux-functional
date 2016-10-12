import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import configureStore from './redux/configureStore';
import { Router, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from "react-tap-event-plugin";
import routes from './routes';

injectTapEventPlugin();

const configuration = configureStore();
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
		<ApolloProvider client={configuration.client} store={configuration.store}>
			{componentEl}
		</ApolloProvider>
	</MuiThemeProvider>,
	rootEl
);
