import React from "react";
import "./Actors.css";
import { API_key } from "../constants";

function Actors({ cast }) {
  return (
    <div className="actors">
      <ul className="movie-actors">
        {cast &&
          cast.map((item, index) => {
            return (
              <div className="movie-actors">
                <div>
                  <img className="actor-image" src={item.image} />

                  <p className="actor-name">{item.name}</p>
                  <p className="actor-rol">{item.rol}</p>
                </div>
              </div>
            );
          })}
      </ul>
    </div>
  );
}
export default Actors;
