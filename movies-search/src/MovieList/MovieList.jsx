import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from './ErrorBoundary';
import MoviePreview from '../MoviePreview/MoviePreview';
import styles from './movieList.css'

export default class MovieList extends React.Component {
    render() {
        return <div>
            <ErrorBoundary>
                <div className={styles.resultsMovie} >
                    {this.props.movies.length ? this.props.movies.map(item => {
                        return <MoviePreview key={item.id} data={item} />
                    }) : ""}
                </div>
            </ErrorBoundary>
        </div>;
    }
}