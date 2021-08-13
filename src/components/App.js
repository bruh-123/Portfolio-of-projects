import React from "react";
import { Header, Home, About, Contact, Project } from "./";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const App = () => {
	return (
		<Router>
			<Switch>
				<Router path="/projects">
					<Projects />
				</Router>
				<Router path="/contact">
					<Contact />
				</Router>
				<Router path="/about">
					<About />
				</Router>
				<Router path="/" exact>
					<Home />
				</Router>
			</Switch>
		</Router>
	);
};
