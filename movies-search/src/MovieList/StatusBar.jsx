import React from "react";
import styles from './movieList.css'

export default class StatusBar extends React.Component {
    state = { isToggleOn: true };
    sortChange = this.sortChange.bind(this);

    sortChange(e) {
        this.setState(function (prevState) {
            return { isToggleOn: !prevState.isToggleOn };
        });
        this.props.onSortChange(this.state.isToggleOn ? filters[0] : filters[1]);
    }

    render() {
        return <div className={styles.resultStats}>
            <span>{this.props.result} Movies found</span>
            <span className={styles.sortOption}> Sort by
                    <button onClick={(e) => this.sortChange(e)}>
                   <span className="buttonLabel"> {this.state.isToggleOn ? 'Release date' : 'Rating'}</span>
                </button></span>
        </div>;

    }
}

const filters = ["release_date", "vote_count"];
