/* eslint no-template-curly-in-string: 0 */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './moviePreview.css';

const MoviePreview = ({ movie }) => (
  <div className="${styles.previewContainer} movieList">
    <img className={styles.movie} src={movie.poster_path} alt="Movie" title={movie.overview} />

    <div className={styles.preview}>
      <div className={styles.title}>
        {movie.title}
      </div>
      <span className={styles.date}>
        {movie.release_date}
      </span>
    </div>
    <div className={styles.preview}>
      <Link to={`/movie/${movie.id}`}>
Show details..
      </Link>
    </div>
  </div>
);

export default MoviePreview;
