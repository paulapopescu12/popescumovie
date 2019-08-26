import React from "react";
import "./Movie.css";

function Movie(props) {
  return (
    <div class="movie-page">
      <div>Hello movie {props.match.params.id}</div>
      <div className="movie-title">Ready or Not</div>

      <div className="movie-section">
        <img
          className="movie-poster"
          src="https://m.media-amazon.com/images/M/MV5BYzBkMzAyMDUtZTFkZS00OWUyLTgwM2ItNGI3MTQ5NzA3NTVkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,670,1000_AL_.jpg"
        />
        <div>
          <div className="movie-genre">Drama | Horror</div>
          <div className="movie-full-description">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham. It is a long established fact that a reader will be
            distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like).
          </div>
        </div>
      </div>
      <div className="movie-trailer">
        <iframe
          src="https://www.imdb.com/videoembed/vi2696134425"
          allowfullscreen
          width="854"
          height="400"></iframe>
      </div>
      <div className="movie-list-actors">
        <ul className="movie-actors">
          <li className="actor-card">
            <img src="https://m.media-amazon.com/images/M/MV5BMTU1Njc2NTc3OV5BMl5BanBnXkFtZTgwMzUyNjU5NDM@._V1_UY317_CR131,0,214,317_AL_.jpg" />
            <p className="actor-name">Samara Weaving</p>
            <p className="actor-rol">Grace</p>
          </li>
          <li className="actor-card">
            <img src="https://m.media-amazon.com/images/M/MV5BOTY3NzMzMjgyMl5BMl5BanBnXkFtZTcwNjc2OTM4Mg@@._V1_UY317_CR3,0,214,317_AL_.jpg" />
            <p className="actor-name">Adam Brody</p>
            <p className="actor-rol">Daniel Le Domas</p>
          </li>
          <li className="actor-card">
            <img src="https://m.media-amazon.com/images/M/MV5BMjEzNTgyOTY4OV5BMl5BanBnXkFtZTgwMzY2MzEwMjE@._V1_UX214_CR0,0,214,317_AL_.jpg" />
            <p className="actor-name">Mark O'Brien</p>
            <p className="actor-rol">Alex Le Domas</p>
          </li>
          <li className="actor-card">
            <img src="https://m.media-amazon.com/images/M/MV5BMTU1Njc2NTc3OV5BMl5BanBnXkFtZTgwMzUyNjU5NDM@._V1_UY317_CR131,0,214,317_AL_.jpg" />
            <p className="actor-name">Samara Weaving</p>
            <p className="actor-rol">Grace</p>
          </li>
          <li className="actor-card">
            <img src="https://m.media-amazon.com/images/M/MV5BOTY3NzMzMjgyMl5BMl5BanBnXkFtZTcwNjc2OTM4Mg@@._V1_UY317_CR3,0,214,317_AL_.jpg" />
            <p className="actor-name">Adam Brody</p>
            <p className="actor-rol">Daniel Le Domas</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Movie;
