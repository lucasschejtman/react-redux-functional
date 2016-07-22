import React, { PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import { grey400, darkBlack, lightBlack } from 'material-ui/styles/colors';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Delete from 'material-ui/svg-icons/action/delete';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import R from 'ramda';

const styles = {
	checkbox: {
		marginBottom: 16,
	},
	rightIconMenu: {
		horizontal: 'left',
		vertical: 'top'
	}
};

const iconButtonElement = (
	<IconButton
		touch={true}
		tooltip="more"
		tooltipPosition="bottom-left"
	>
    	<MoreVertIcon color={grey400} />
  	</IconButton>
);

const rightIconMenu = (props) => (
  	<IconMenu iconButtonElement={iconButtonElement}
	  	anchorOrigin={styles.rightIconMenu}
	  	targetOrigin={styles.rightIconMenu}
	>
		<MenuItem primaryText="Delete" leftIcon={<Delete />} onClick={props.onDelete} />
  	</IconMenu>
);

const leftCheckbox = (props) => (
	<Checkbox style={styles.checkbox} {...props} />
);

const TodoItem = ({ onClick, onDelete, completed, name, description }) => (
	<div>
		<ListItem
			style={{
				textDecoration: completed ? 'line-through' : 'none'
			}}
			leftCheckbox={leftCheckbox({ onCheck: onClick, checked: completed })}
			rightIconButton={rightIconMenu({ onDelete: onDelete })}
			primaryText={name}
			secondaryText={description}
			secondaryTextLines={1}
		/>
	    <Divider inset={true} />
    </div>
)

TodoItem.propTypes = {
 	onClick: PropTypes.func.isRequired,
 	onDelete: PropTypes.func.isRequired,
 	name: PropTypes.string.isRequired,
 	completed: PropTypes.bool.isRequired
};

export default TodoItem;