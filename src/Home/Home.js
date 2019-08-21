import React from "react";
import { Link } from "react-router-dom";
import collection from "../Collection/collection";

function Home() {
  return (
    <div>
      <Link to="about">Go To About Page</Link>
      <collection></collection>
    </div>
  );
}

export default Home;
