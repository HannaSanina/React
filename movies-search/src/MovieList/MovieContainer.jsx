import React from "react";
import MovieList from "./MovieList";
import StatusBar from "./StatusBar";
import PropTypes from 'prop-types';
/* import { fetchAllMovies, searchMovies, SORT_MOVIES, GET_ALL } from '../actions.jsx' */
import { searchMovies } from '../modules/movies'
import { connect } from 'react-redux';
import styles from './movieList.css'
import StatusBarContainer from "./StatusBarContainer";
import 'url-search-params-polyfill';

class MovieListContainer extends React.Component {
    state = { isToggleOn: true, sortOption: filters[0] };
    params = new URLSearchParams(this.props.location.search);

    componentWillMount() {
        this.props.searchMovies(this.props.match.params.query);
    }

    render() {
        if (this.props.error) {
            return <p>Sorry! There was an error loading the items</p>;
        }
        return <div>
            <StatusBarContainer />
            <MovieList movies={this.props.movies} />
        </div>;
    }
}

const filters = ["release_date", "vote_count"];

const mapDispatchToProps = {
    searchMovies: searchMovies
}

const mapStateToProps = state => ({ movies: state.movies.movies, error: state.error })


export default connect(mapStateToProps, mapDispatchToProps)(MovieListContainer);