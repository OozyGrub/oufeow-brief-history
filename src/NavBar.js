import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-bar">
      <Link className="nav-item" to="/">Home</Link>
      <Link className="nav-item" to="/gallery">Gallery</Link>
      <Link className="nav-item" to="/story">Story</Link>
      <Link className="nav-item" to="/covid">Covid</Link>
    </div>
  );
}



export default NavBar;
