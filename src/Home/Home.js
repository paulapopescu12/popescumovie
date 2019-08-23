import React from "react";
import { Link } from "react-router-dom";
import Collection from "../Collection/Collection";
import "./Home.css";

function Home() {
  return (
    <div>
      <Link to="about">Go to about page</Link>
      <h1 className="collection-title">Popular</h1>
      <Collection sorting="popularity.desc" cardCount={4}></Collection>
      <div className="button-position">
        <button className="button">
          <span>Read more</span>
        </button>
      </div>
      <h1 className="collection-title">New</h1>
      <Collection sorting="release_date.desc" cardCount={4}></Collection>
      <div className="button-position">
        <button className="button">
          <span>Read more</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
