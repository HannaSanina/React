import React from 'react';
import { connect } from 'react-redux';
import MovieList from './MovieList';
import { searchMovies } from '../actions';
import StatusBarContainer from './StatusBarContainer';

class MovieListContainer extends React.Component {
    params = new URLSearchParams(this.props.location.search);

    componentDidMount() {
      this.props.searchMovies(this.props.match.params.query);
    }

    render() {
      if (this.props.error) {
        return (
          <p>
Sorry! There was an error loading the items
          </p>
        );
      }
      return (
        <div>
          <StatusBarContainer />
          <MovieList movies={this.props.movies} />
        </div>
      );
    }
}

const mapDispatchToProps = {
  searchMovies,
};

const mapStateToProps = state => ({ movies: state.movies, error: state.error });

export default connect(mapStateToProps, mapDispatchToProps)(MovieListContainer);
