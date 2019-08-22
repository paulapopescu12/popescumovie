import React from "react";
import "./Card.css";

function Card({ title, genres, description, src, index }) {
  return (
    <li className="card">
      <img className="card-image" src={src} />
      <div className="card-text">
        <ul className="genre">
          {genres.map((genre, index) => (
            <li key={index} className="genre-type">
              {genre}
            </li>
          ))}
        </ul>
        <h2 className="card-title">{title}</h2>
        <div className="card-description">
          <br></br>
          {description}
        </div>
        <div className="button-position">
          <button className="button">Read more</button>
        </div>
      </div>
    </li>
  );
}

export default Card;
