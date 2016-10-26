import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import R from 'ramda';

const LoadButton = (onClick) => <RaisedButton label="Load" primary={true} onClick={onClick} />;

const ModuleItem = ({ onClick, name, identifier, version, props }) => (
	<div>
		<ListItem primaryText={name} rightIconButton={LoadButton(onClick)} />
		<Divider inset={true} />
	</div>
);

ModuleItem.propTypes = {
 	onClick: PropTypes.func.isRequired,
 	name: PropTypes.string.isRequired,
 	identifier: PropTypes.string.isRequired,
	version: PropTypes.string.isRequired,
	props: PropTypes.object.isRequired
};

export default ModuleItem;
