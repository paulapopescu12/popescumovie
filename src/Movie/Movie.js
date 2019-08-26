import React from "react";
import "./Movie.css";
import { API_key } from "../constants";
import Trailer from "../Trailer/Trailer";
import Actors from "../Actors/Actors";

class Movie extends React.Component {
  state = {
    movie: {},
    cast: [],
  };

  componentDidMount() {
    if (this.props.match.params.id)
      fetch(
        "https://api.themoviedb.org/3/movie/" +
          this.props.match.params.id +
          "?api_key=" +
          API_key
      )
        .then(response => response.json())
        .then(movie => {
          this.setState({
            movie: {
              title: movie.original_title,
              description: movie.overview,
              trailer: "",
              src:
                movie.poster_path &&
                "https://image.tmdb.org/t/p/w500" + movie.poster_path,
              genres: movie.genre_ids,
              id: movie.id,
            },
          });
        });

    fetch(
      "https://api.themoviedb.org/3/movie/" +
        this.props.match.params.id +
        "/credits?api_key=" +
        API_key
    )
      .then(response => response.json())
      .then(castList => {
        this.setState({
          cast: castList.cast.map(actor => {
            return {
              name: actor.name,
              rol: actor.character,
              image:
                actor.profile_path &&
                "https://image.tmdb.org/t/p/w500" + actor.profile_path,
            };
          }),
        });
      });
  }
  render() {
    return (
      <div className="movie-page">
        <div className="movie-title">{this.state.movie.title}</div>

        <div className="movie-section">
          <img className="movie-poster" src={this.state.movie.src} />
          <div>
            <div className="movie-genre">Drama | Horror</div>
            <div className="movie-full-description">
              {this.state.movie.description}
            </div>
          </div>
        </div>
        <div className="movie-trailer">
          <Trailer id={this.props.match.params.id}></Trailer>
        </div>

        <div className="movie-list-actors">
          <Actors cast={this.state.cast}></Actors>
        </div>
      </div>
    );
  }
}
export default Movie;
