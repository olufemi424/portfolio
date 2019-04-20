import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
