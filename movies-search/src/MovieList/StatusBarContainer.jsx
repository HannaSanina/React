import React from "react";
import MovieList from "./MovieList";
import StatusBar from "./StatusBar";
import PropTypes from 'prop-types';
import { SORT_MOVIES } from '../modules/movies'
import { connect } from 'react-redux';
import styles from './movieList.css'

class StatusBarContainer extends React.Component {
    state = { isToggleOn: true, sortOption: filters[0] };

    handleSortChange = this.handleSortChange.bind(this);

    handleSortChange(filterText) {
        this.props.sortMovies(filterText);
    }

    render() {
        return <div>
            <StatusBar
                onSortChange={this.handleSortChange}
                result={this.props.movies.length} />
        </div>;
    }
}

const filters = ["release_date", "vote_count"];

const mapStateToProps = state => ({ movies: state.movies })
const mapDispatchToProps = dispatch => ({
    sortMovies: filterText => dispatch({ type: SORT_MOVIES, field: filterText })
  })

export default connect(mapStateToProps, mapDispatchToProps)(StatusBarContainer);