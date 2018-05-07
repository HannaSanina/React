import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './moviePreview.css';

const MoviePreview = ({ data }) => {
    return <div className='${styles.previewContainer} movieList' >
        <img className={styles.movie} src={data.picture} alt="Movie" title={data.about} />
        <div className={styles.preview}>
            <span>{data.title}</span>
            <button>Order</button>
        </div>
    </div>
}

export default MoviePreview;