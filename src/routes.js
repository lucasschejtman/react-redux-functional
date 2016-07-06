import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import App from './modules/app/components/App';
//TODO: Dynamic Load
import Todo from './modules/todo/containers/TodoContainer';

const routes = () => (
	<Route path="/" component={App}>
		<IndexRoute component={Todo} />
		<Redirect from="*" to="404" />
	</Route>
);

export default routes();