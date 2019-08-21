import React from "react";
import "./Collection.css";

function Collection(props) {
  return (
    <div className="Collection">
      <div>
        <ul>
          <li className="card">
            <h2>title1</h2>
            <img src="http://www.iconarchive.com/download/i103416/paomedia/small-n-flat/flower.ico" />
            <div>description1</div>
          </li>
          <li className="card">
            <h2>title2</h2>
            <img src="http://www.iconarchive.com/download/i103416/paomedia/small-n-flat/flower.ico" />
            <div>description2</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Collection;
