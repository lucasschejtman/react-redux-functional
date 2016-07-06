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

const styles = {
	block: {
		maxWidth: 250,
	},
	checkbox: {
		marginBottom: 16,
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
	  	anchorOrigin={{horizontal: 'left', vertical: 'top'}}
	  	targetOrigin={{horizontal: 'left', vertical: 'top'}}
	>
		<MenuItem primaryText="Delete" leftIcon={<Delete />} onClick={props.onDelete} />
  	</IconMenu>
);

const leftCheckbox = (props) => (
	<Checkbox style={styles.checkbox} {...props} />
);

const TodoItem = ({ onClick, onDelete, completed, name }) => (
	<div>
		<ListItem
			style={{
				textDecoration: completed ? 'line-through' : 'none'
			}}
			leftCheckbox={leftCheckbox({ onCheck: onClick, checked: completed })}
			rightIconButton={rightIconMenu({ onDelete: onDelete })}
			primaryText={name}
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