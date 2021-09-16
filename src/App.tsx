import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import "./App.css";
import User from "./views/user";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/user" component={User} />
      </Router>
    </div>
  );
}

export default App;

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div className="links">
        <Link to="/user">User</Link>
      </div>
    </div>
  );
}
