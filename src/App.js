import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

export default function App() {
	return (
		<Router>
			<div>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
				</ul>

				<hr />

				{/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
				<Switch>
					<Route exact path="/">
						<div>Home</div>
					</Route>
					<Route path="/about">
						<div>About</div>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
