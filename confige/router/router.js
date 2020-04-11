import React from "react";
import {Home, About, My_reports, My_twitter, Skills} from './index'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";


export default function Approuter() {
  return (
    <Router>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/my_reports" component={My_reports} />
          <Route path="/my_twitter" component={My_twitter} />
          <Route path="/skills" component={Skills} />

    
    </Router>
  );
}

