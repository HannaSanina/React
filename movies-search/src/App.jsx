import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import Search from './Search/Search.jsx';
import MovieListContainer from './MovieList/MovieContainer.jsx';
import MovieDetailsContainer from './MovieDetail/MovieDetailsContainer';
import NotFound from './NotFound.jsx';
import EmptyList from './EmptyList.jsx';
import * as styles from './styles/App.css'

export default class App extends React.Component {

    render() {
        return (
            <div className={styles.appContainer}>
                <div className={styles.stretchView}>
                    <header className={styles.appHeader}>
                        <Search />
                    </header>
                    <Switch>
                        <Route exact path='/' component={EmptyList} />
                        <Route exact path='/search/:query' component={MovieListContainer} />
                        <Route exact path='/movie/:number' component={MovieDetailsContainer} />

                        <Route component={NotFound} />
                    </Switch>

                </div>
                <footer />
            </div>
        );
    }
}