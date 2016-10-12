import { pick } from 'ramda';
import React from 'react';
import { connect } from 'react-redux';
import { ImdbSearchForm } from '../components';
import { actions } from '../index';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const SearchQuery = gql`query SearchQuery($id: String!) {
  Title(id: $id) {
    Type,
    Year,
    Title,
    Rated,
    Awards,
    imdbID,
    Poster,
    Runtime,
    Country,
    Language,
    Metascore,
    imdbVotes,
    imdbRating,
    Genre,
    Writer,
    Director,
    Actors,
    Released,

    ... on Movie {
      Released
    },

    ... on Series {
      totalSeasons,
    },

    ... on Episode {
      Episode
    }
  }
}`;
const mapStateToProps = (state) => pick(['id'], state.imdb);

const mapDispatchToProps = (dispatch) => ({
	onSearchId: (id) => dispatch(actions.search(id))
});

const ImdbSearchContainer = ({ id, data, onSearchId }) => (
 	<div className="col-1-1">
 		<div className="col-6-12">
 			<ImdbSearchForm onSubmit={onSearchId} />
		</div>
    <div className="col-6-12">
      { JSON.stringify(data.Title) }
    </div>
	</div>
);

const ImdbSearchContainerGql = graphql(SearchQuery,{ options({ id }) { return { variables: { id } } } })(ImdbSearchContainer);

export default connect(mapStateToProps, mapDispatchToProps)(ImdbSearchContainerGql);
