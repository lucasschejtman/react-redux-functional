import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import App from './modules/app/components/App';
//TODO: Dynamic Load
import Todo from './modules/todo/containers/TodoContainer';
import Imdb from './modules/imdb/containers/ImdbSearchContainer';
import ModuleLoader from './modules/loader/containers/ModuleLoaderContainer';

const routes = () => (
	<Route path="/" component={App}>
		<IndexRoute component={Todo} />
		<Route path="/imdb" component={Imdb} />
		<Route path="/loader" component={ModuleLoader} />
		<Redirect from="*" to="404" />
	</Route>
);

export default routes();
