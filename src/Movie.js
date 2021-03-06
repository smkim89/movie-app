import React, { Component } from 'react';
import './Movie.css';
import PropTypes from 'prop-types'



class Movie extends Component{

    static propTypes = {
        title : PropTypes.string.isRequired, //isRequired 필수값으로처리.
        poster : PropTypes.string,
        genres: PropTypes.array.isRequired,
        synopsis: PropTypes.string.isRequired
    }

    render() {
        console.log(this.props);
        return (
            <div className="Movie">
                <div className="Movie__Columns">
                    <MoviePoster poster={this.props.poster} alt={this.props.title} />
                </div>
                <div className="Movie__Columns">
                    <h1>{this.props.title}</h1>
                    <div className="Movie__Genres">
                        {this.props.genres.map((genre, index) => 
                            <MovieGenre genre={genre} key={index} />
                        )}
                    </div>
                    <p className="Movie__Synopsis">
                        {this.props.synopsis}
                    </p>
                </div>
            </div>
        )
    }
}

class MoviePoster extends Component{
    static propTypes = {
        poster : PropTypes.string.isRequired,
        alt : PropTypes.string.isRequired
    }
    render() {
        return (
            <img className="Movie__Poster" src={this.props.poster} alt={this.props.alt} />
        );
    }
}

class MovieGenre extends Component{
    static propTypes = {
        genre : PropTypes.string.isRequired
    }
    render() {
        return (
            <span className="Movie__Genre" >
                {this.props.genre}
            </span>
        );
    }
}

export default Movie;