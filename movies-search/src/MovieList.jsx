import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Image1 from './images/1.jpg'
import ErrorBoundary from './ErrorBoundary';
import styles from './styles/moviePreview.css'

const MoviePreview = ({ imageId }) => {
    return <span className={styles.previewContainer}>
        <img className={styles.movie} src={imageId} alt="Movie" />
        <div className={styles.preview}>Film title <button>Order</button></div>
    </span>
}

class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    render() {
        return <div>
            <div className={styles.resultStats}>
                <span> # Movies found</span>
                <span> Sort by</span>
            </div>  
            <ErrorBoundary>
                <div className={styles.resultsMovie}>
                    <MoviePreview imageId={Image1} />
                    <MoviePreview imageId={Image1} />
                    <MoviePreview imageId={Image1} />
                    <MoviePreview imageId={Image1} />
                    <MoviePreview imageId={Image1} />
                    <MoviePreview imageId={Image1} />
                </div>
            </ErrorBoundary>
        </div>;
    }
}
export default MovieList;