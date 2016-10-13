import gql from 'graphql-tag';

export const SearchQuery = gql`query SearchQuery($id: String!) {
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
      totalSeasons
    },

    ... on Episode {
      Episode
    }
  }
}`;
