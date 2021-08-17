import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

export const Header = () => {
	return (
		<Flex minH="4rem" bg="green.200">
			<Heading p="1rem">Hey, My name is Bruno</Heading>
		</Flex>
	);
};
