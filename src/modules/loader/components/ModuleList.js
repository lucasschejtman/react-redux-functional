import { ModuleItem } from './index';

import { curry } from 'ramda';
import React, { PropTypes } from 'react';
import { List } from 'material-ui/List';

const RenderModuleItem = curry((onModuleClick, module) => <ModuleItem key={module.identifier} {...module} onClick={() => onModuleClick(module)} />);

const ModuleList = ({ modules, onModuleClick }) => <List>{ modules.map(RenderModuleItem(onModuleClick)) }</List>;

ModuleList.propTypes = {
	modules: PropTypes.arrayOf(PropTypes.shape({
		identifier: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		version: PropTypes.string.isRequired,
		props: PropTypes.object.isRequired
	}).isRequired).isRequired,
	onModuleClick: PropTypes.func.isRequired
};

export default ModuleList;
