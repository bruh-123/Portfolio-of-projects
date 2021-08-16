import React from "react";
import { Header, Home, About, Contact, Projects } from "./";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const App = () => {
	return (
		<>
			<Header />
			<Home />
		</>
	);
};
