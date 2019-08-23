import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import Home from "../Home/Home";
import About from "../About/About";
import Popular from "../Popular/Popular";
import New from "../New/New";

function App() {
  return (
    <Router>
      <div className="app">
        <Header
          logoImage="https://assets.ifttt.com/images/channels/28/icons/monochrome_large.png"
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
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
