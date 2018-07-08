import React, { Component } from 'react';
import './Movie.css';
import MoviePoster from './MoviePoster'

class Movie extends Component{
    render() {
        return (
            <div>
                <MoviePoster />
                <h1>Hello This is Movie</h1>
            </div>
        );
    }
}


export default Movie;