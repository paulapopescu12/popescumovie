import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import Home from "../Home/Home";
import About from "../About/About";
import Popular from "../Popular/Popular";
import New from "../New/New";
import Movie from "../Movie/Movie";

function App() {
  return (
    <Router>
      <div className="app">
        <Header
          logoImage="https://www.freelogodesign.org/file/app/client/thumb/4e16099d-955b-44c4-a0f8-9bb77cbce253_200x200.png?1566562583024"
          menu={[
            { link: "/popular", title: "Popular" },
            { link: "/new", title: "New" },
            { link: "/search", title: "Search" },
          ]}></Header>
        <div className="app-content">
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/popular" exact component={Popular}></Route>
          <Route path="/new" exact component={New}></Route>
          <Route path="/movie/:id" exact component={Movie}></Route>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
