import React from "react";
import "./Card.css";
import { tsPropertySignature } from "@babel/types";

function Card({ title, genres, description, src, index }) {
  return (
    <li className="card">
      {src ? (
        <img className="card-image" src={src} />
      ) : (
        <img src="https://www.auro-3d.com/wp-content/uploads/2016/08/no-poster-available.jpg" />
      )}
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
        <div className="card-button-position">
          <button className="card-button">Read more</button>
        </div>
      </div>
    </li>
  );
}

export default Card;
