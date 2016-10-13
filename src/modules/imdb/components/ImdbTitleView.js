import React, { PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';

const TitlePropItem = ({ name, value }) => <ListItem key={name} primaryText={name} secondaryText={value} />;

const ImdbTitleView = ({ title }) => (
  <List>
		{
			Object.keys(title).map((key) => TitlePropItem({ name: key, value: title[key] }))
		}
	</List>
);

ImdbTitleView.propTypes = {
  title: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    imdbRating: PropTypes.string.isRequired
  }).isRequired
};

export default ImdbTitleView;
