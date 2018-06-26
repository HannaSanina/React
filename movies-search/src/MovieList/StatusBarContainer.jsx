import React from 'react';
import { connect } from 'react-redux';
import StatusBar from './StatusBar';
import { SORT_MOVIES } from '../actions';

class StatusBarContainer extends React.Component {
    handleSortChange = this.handleSortChange.bind(this);

    handleSortChange(filterText) {
      this.props.sortMovies(filterText);
    }

    render() {
      return (
        <div>
          <StatusBar
            onSortChange={this.handleSortChange}
            result={this.props.movies.length}
          />
        </div>
      );
    }
}

const mapStateToProps = state => ({ movies: state.movies });
const mapDispatchToProps = dispatch => ({
  sortMovies: filterText => dispatch({ type: SORT_MOVIES, field: filterText }),
});

export default connect(mapStateToProps, mapDispatchToProps)(StatusBarContainer);
