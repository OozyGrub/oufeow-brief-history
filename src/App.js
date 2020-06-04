import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import GalleryPage from "./GalleryPage";
import NavBar from "./NavBar";
import StoryPage from "./StoryPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/"><HomePage /></Route>
        <Route exact path="/gallery"><GalleryPage /></Route>
        <Route exact path="/story"><StoryPage /></Route>
      </Switch>
    </Router>
  );
}

export default App;
