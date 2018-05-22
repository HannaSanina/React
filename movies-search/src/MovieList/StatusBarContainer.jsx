import React from "react";
import MovieList from "./MovieList";
import StatusBar from "./StatusBar";
import PropTypes from 'prop-types';
import { fetchAllMovies, SORT_MOVIES, GET_ALL } from '../actions.jsx'
import { connect } from 'react-redux';
import styles from './movieList.css'

class StatusBarContainer extends React.Component {
    state = { isToggleOn: true, sortOption: filters[0] };

    handleSortChange = this.handleSortChange.bind(this);

    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    handleSortChange(filterText) {
        const { store } = this.context;
        store.dispatch({ type: SORT_MOVIES, field: filterText });
    }

    render() {
        const { store } = this.context;
        return <div>
            <StatusBar
                onSortChange={this.handleSortChange}
                result={store.getState().length} />
        </div>;
    }
}

StatusBarContainer.contextTypes = {
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
       // fetchData: () => dispatch(fetchAllMovies())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StatusBarContainer);