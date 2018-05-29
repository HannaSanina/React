import * as React from 'react';
import styles from './styles/App.css'

export default class EmptyList extends React.Component {

    render() {
        return (
            <h2 className={styles.empty}>No films found</h2>
        );
    }
}