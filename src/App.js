import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";

//page not found
import PageNotFound from "./layouts/PageNotFound";

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/404" component={PageNotFound} />
						<Redirect from="*" to="/404" />
					</Switch>
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
