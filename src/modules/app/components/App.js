import React, { Component, PropTypes } from 'react';

const App = ({ children }) => (
	<div class="row">
		{children}
	</div>
);

App.propTypes = {
	children: PropTypes.element.isRequired
};

export default App;