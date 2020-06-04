import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="header">
      <div>
      </div>
      <ul className="nav-bar">
        <li><Link className="nav-item" to="/">Home</Link></li>
        <li><Link className="nav-item" to="/gallery">Gallery</Link></li>
        <li><Link className="nav-item" to="/story">Story</Link></li>
      </ul>
    </div>
  );
}



export default NavBar;
