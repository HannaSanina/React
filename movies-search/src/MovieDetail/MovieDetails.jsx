import React from 'react';
import styles from './movieDetails.css';

export default class MovieDetails extends React.PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <div>
          <img className={styles.movie} src={this.props.movieDetails.poster_path} alt="Movie" title={this.props.movieDetails.overview} />
        </div>
        <div className={styles.movieDetails}>
          <div className={styles.title}>
            {this.props.movieDetails.title}
            {' '}
          </div>
          <div className={styles.tagline}>
            {this.props.movieDetails.tagline}
            {' '}
          </div>
          <div className={styles.release_date}>
            {this.props.movieDetails.release_date}
            {' '}
          </div>
          <div className={styles.overview}>
            {this.props.movieDetails.overview}
            {' '}
          </div>
        </div>
      </div>
    );
  }
}
