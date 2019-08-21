import React from "react";
import { Link } from "react-router-dom";
import Card from "../card/card.js";

function Home() {
  return (
    <div>
      <Link to="about">Go To About Page</Link>,
      <Card Cardul="kjsefiuehrfjgnfslkjdgv"></Card>
    </div>
  );
}

export default Home;
