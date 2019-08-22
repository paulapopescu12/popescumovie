import React from "react";
import "./Collection.css";
import Card from "../Card/Card";
import { API_key } from "../constants";

class Collection extends React.Component {
  state = {
    status: "success",
    movies: [],
  };

  componentDidMount() {
    console.log("Collection did mount!");
    console.log("Status: ", this.state.status);
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=" + API_key)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({
          movies: response.results.map(movie => {
            return {
              title: movie.original_title,
              description: movie.overview,
              src: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
              genres: movie.genre_ids,
            };
          }),
        });
      });

    this.setState({ status: "error" });
  }
  render() {
    return (
      <div>
        <h1 className="collection-title">Popular</h1>
        <ul className="collection">
          {this.state.movies.map((movie, index) => {
            return (
              <Card
                key={index}
                title={movie.title}
                genres={movie.genres}
                description={movie.description}
                src={movie.src}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Collection;
