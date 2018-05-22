import React from "react";
import MovieList from "./MovieList";
import StatusBar from "./StatusBar";
import PropTypes from 'prop-types';
import { fetchAllMovies, SORT_MOVIES, GET_ALL } from '../actions.jsx'
import { connect } from 'react-redux';
import styles from './movieList.css'
import StatusBarContainer from "./StatusBarContainer";

class MovieListContainer extends React.Component {
    state = { isToggleOn: true, sortOption: filters[0] };

    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
        this.props.fetchData()
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const { store } = this.context;
        if (store.getState().error) {
            return <p>Sorry! There was an error loading the items</p>;
        }
        return <div>
            <StatusBarContainer />
            <MovieList movies={store.getState().data} />
        </div>;
    }
}

MovieListContainer.contextTypes = {
    store: PropTypes.object
}

const filters = ["release_date", "vote_count"];

const mapStateToProps = (state) => {
    return {
        data: state.data,
        error: state.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchAllMovies())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieListContainer);