import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from './ErrorBoundary';
import MoviePreview from '../MoviePreview/MoviePreview';
import styles from './movieList.css'

class MovieList extends React.Component {
    render() {
        return <div>
            <div className={styles.resultStats}>
                <span> # Movies found</span>
                <span> Sort by</span>
            </div>
            <ErrorBoundary>
                <div className={styles.resultsMovie} >
                    {movieDetails.map(item => {
                        return <MoviePreview key={item.id} data={item} />
                    })}
                </div>
            </ErrorBoundary>
        </div>;
    }
}
export default MovieList;

const movieDetails = [
    {
        "id": 0,
        "picture": "https://imgc.allpostersimages.com/img/posters/titanic_u-L-F4S6CQ0.jpg?src=gp&w=300&h=375",
        "title": "CANOPOLY",
        "about": "Fugiat velit commodo sint sit occaecat consequat magna nulla cupidatat incididunt magna. Veniam aliquip fugiat minim nulla incididunt aliqua dolore proident pariatur excepteur. Sunt pariatur enim minim magna. Do id dolor sint labore sint do eiusmod est et do ullamco aliquip.",
        "releaseDate": "January 6, 2014"
    },
    {
        "id": 1,
        "picture": "https://imgc.allpostersimages.com/img/posters/the-terminator_u-L-F13M960.jpg?src=gp&w=300&h=375",
        "title": "ZENTHALL",
        "about": "Et eiusmod proident nostrud velit dolor ullamco ex elit cupidatat ut velit. Ea et ex occaecat dolor culpa irure. Id aute irure eu et fugiat eiusmod mollit nostrud veniam anim reprehenderit. Excepteur sunt est nostrud consequat.",
        "releaseDate": "November 12, 2016"
    },
    {
        "id": 2,
        "picture": "https://imgc.allpostersimages.com/img/posters/pulp-fiction-cover-with-uma-thurman-movie-poster_u-L-F13MQF0.jpg?src=gp&w=300&h=375",
        "title": "KIDGREASE",
        "about": "Ut sunt nulla pariatur sit est cillum. Voluptate proident veniam proident reprehenderit cupidatat pariatur culpa exercitation. Ad nostrud mollit Lorem irure. Est non pariatur sint fugiat aliquip est culpa eu id ex cupidatat do amet reprehenderit. Commodo culpa duis qui do proident. Dolore aliquip consequat adipisicing et qui qui laboris elit proident consequat reprehenderit. Nulla consequat excepteur commodo nisi proident qui mollit consectetur velit esse occaecat proident aliquip irure.",
        "releaseDate": "April 24, 2014"
    },
    {
        "id": 3,
        "picture": "https://imgc.allpostersimages.com/img/posters/braveheart_u-L-F4S6VR0.jpg?src=gp&w=300&h=375",
        "title": "NORSUP",
        "about": "Laboris elit cillum ad consectetur tempor culpa sunt aliquip do aliquip Lorem veniam consectetur duis. Ea est cillum aliqua nisi aute commodo. Sit pariatur amet ad duis cillum consectetur sint sunt proident sunt commodo do mollit laborum. Minim voluptate cillum velit in occaecat consectetur do voluptate dolor Lorem velit occaecat ut. Culpa laborum dolor officia et. Id occaecat nulla deserunt laborum.",
        "releaseDate": "September 17, 2017"
    },
    {
        "id": 4,
        "picture": "https://imgc.allpostersimages.com/img/posters/a-christmas-carol_u-L-F3NEXQ0.jpg?src=gp&w=300&h=375",
        "title": "STREZZO",
        "about": "Cupidatat consectetur ullamco ad et fugiat elit do cupidatat deserunt laboris laboris. Nulla dolore adipisicing pariatur laboris consectetur proident amet magna. Elit ad consequat ipsum ex aliquip duis incididunt Lorem consequat sunt sunt dolore minim laborum.",
        "releaseDate": "November 20, 2017"
    },
    {
        "id": 5,
        "picture": "https://imgc.allpostersimages.com/img/posters/alphaville-french-style_u-L-F4SA0K0.jpg?src=gp&w=300&h=375",
        "title": "LUNCHPOD",
        "about": "Magna et nulla et minim in laboris. Proident anim proident in ad laboris eiusmod proident enim. Amet voluptate mollit amet quis aute exercitation eiusmod duis deserunt ex est aliqua. Cillum mollit laborum dolor ad fugiat deserunt reprehenderit aute non labore reprehenderit culpa dolor ullamco.",
        "releaseDate": "April 6, 2018"
    },
    {
        "id": 6,
        "picture": "https://imgc.allpostersimages.com/img/posters/the-book-thief_u-L-F6D1GO0.jpg?src=gp&w=300&h=375",
        "title": "COMTEXT",
        "about": "Exercitation laboris in aute eu enim. Incididunt laboris sint eiusmod minim anim dolore ullamco nostrud anim anim ullamco. Tempor deserunt excepteur pariatur reprehenderit irure dolor velit ea et voluptate sunt quis. Id non nostrud aute veniam et commodo est proident labore anim consequat. Irure enim excepteur esse laboris occaecat.",
        "releaseDate": "October 11, 2014"
    },
    {
        "id": 7,
        "picture": "https://imgc.allpostersimages.com/img/posters/godfather-color_u-L-F4VAN20.jpg?src=gp&w=300&h=375",
        "title": "SARASONIC",
        "about": "Veniam do deserunt labore fugiat tempor. Id ea ut aliquip aute magna ipsum cupidatat est eu laborum. Fugiat cillum sunt occaecat deserunt reprehenderit tempor veniam in nulla sint id pariatur nisi. Fugiat Lorem culpa ut fugiat nostrud qui occaecat.",
        "releaseDate": "November 9, 2014"
    },
    {
        "id": 8,
        "picture": "https://imgc.allpostersimages.com/img/posters/diabolique_u-L-F3NDLG0.jpg?src=gp&w=300&h=375",
        "title": "SLAMBDA",
        "about": "Ex Lorem duis tempor ex aliqua fugiat anim esse occaecat duis. Aliquip do dolore est ea nulla aliquip nostrud sunt cupidatat qui velit reprehenderit. Nulla ad consequat non non commodo consectetur pariatur elit esse. Ex exercitation aute do non ipsum incididunt et exercitation dolor ipsum non voluptate.",
        "releaseDate": "April 26, 2017"
    },
    {
        "id": 9,
        "picture": "https://imgc.allpostersimages.com/img/posters/secret-window_u-L-F4JAUM0.jpg?src=gp&w=300&h=375",
        "title": "SCENTRIC",
        "about": "Officia dolore aliquip consequat nisi ullamco aute ex ex dolor duis eiusmod consequat. Ea Lorem commodo deserunt dolore anim et. Fugiat adipisicing incididunt excepteur commodo officia pariatur minim. Nisi duis qui amet proident ad adipisicing do eiusmod dolore officia eiusmod ut veniam reprehenderit. Irure eiusmod labore non nulla consequat quis irure. Amet dolor incididunt fugiat quis sunt excepteur occaecat anim fugiat et. Enim irure in labore incididunt.",
        "releaseDate": "December 21, 2015"
    }
]