import React from "react";
import { Header, Home, About, Contact, Projects } from "./";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/projects">
					<Header />
					<Projects />
				</Route>
				<Route path="/contact">
					<Header />
					<Contact />
				</Route>
				<Route path="/about">
					<Header />
					<About />
				</Route>
				<Route path="/" exact>
					<Header />
					<Home />
				</Route>
			</Switch>
		</Router>
	);
};
