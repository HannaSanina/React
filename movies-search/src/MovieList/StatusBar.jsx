import React from 'react';
import styles from './movieList.css';
import { Button } from 'reactstrap';

const filters = ['release_date', 'vote_count'];

export default class StatusBar extends React.Component {
    sortChange = this.sortChange.bind(this);

    state = { isToggleOn: true };

    sortChange() {
      this.setState(prevState => ({ isToggleOn: !prevState.isToggleOn }));
      this.props.onSortChange(this.state.isToggleOn ? filters[0] : filters[1]);
    }

    render() {
      return (
        <div className={styles.resultStats}>
          <span>
            {this.props.result}
            {' '}
Movies found
          </span>
          <span className={styles.sortOption}>
            {' '}
Sort by
            <Button color="primary" onClick={e => this.sortChange(e)}>
              <span className="buttonLabel">
                {' '}
                {this.state.isToggleOn ? 'Release date' : 'Rating'}
              </span>
            </Button>
          </span>
        </div>
      );
    }
}
