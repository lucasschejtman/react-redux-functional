import { ImdbTitleView, ImdbSearchForm } from '../components';
import { actions } from '../index';
import { SearchQuery } from './queries';

import React from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { pick } from 'ramda';

const mapStateToProps = (state) => pick(['id'], state.imdb);
const mapDispatchToProps = (dispatch) => ({	onSearchId: (id) => dispatch(actions.search(id)) });
const graphqlConfig = {
  options({ id }) { return { variables: { id } }; }
};

const ImdbSearchContainer = ({ id, data, onSearchId }) => (
 	<div className="col-1-1">
 		<div className="col-6-12">
 			<ImdbSearchForm onSubmit={onSearchId} />
		</div>
    <div className="col-6-12">
      { data.Title && <ImdbTitleView title={data.Title} /> }
    </div>
	</div>
);

const ImdbSearchContainerGql = graphql(SearchQuery, graphqlConfig)(ImdbSearchContainer);

export default connect(mapStateToProps, mapDispatchToProps)(ImdbSearchContainerGql);
