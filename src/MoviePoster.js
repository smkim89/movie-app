import React, { Component } from 'react';
import './MoviePoster.css';

class MoviePoster extends Component{
    render() {
        return (
            <img src={this.props.poster} />
        );
    }
}


export default MoviePoster;