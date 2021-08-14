import React from "react";
import { Flex, Text, Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

export const Header = () => {
	const history = useHistory();

	const handleNavigateHome = () => {
		history.push("/");
	};
	const handleNavigateAbout = () => {
		history.push("/about");
	};
	const handleNavigateContact = () => {
		history.push("/contact");
	};
	const handleNavigateProjects = () => {
		history.push("/projects");
	};

	return (
		<Flex minH="5rem">
			<Text>Hola</Text>
			<Button onClick={handleNavigateHome}>Home</Button>
			<Button onClick={handleNavigateAbout}>About</Button>
			<Button onClick={handleNavigateContact}>Contact</Button>
			<Button onClick={handleNavigateProjects}>Projects</Button>
		</Flex>
	);
};
