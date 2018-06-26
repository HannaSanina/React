import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import MoviePreview from '../MoviePreview/MoviePreview';
import styles from './movieList.css';

export default class MovieList extends React.PureComponent {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <div className={styles.resultsMovie}>
            {this.props.movies.map(item => <MoviePreview key={item.id} movie={item} />)}
          </div>
        </ErrorBoundary>
      </div>
    );
  }
}
