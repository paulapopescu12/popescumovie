import React from "react";

function Movie(props) {
  return <div>Hello movie {props.match.params.id}</div>;
}

export default Movie;
