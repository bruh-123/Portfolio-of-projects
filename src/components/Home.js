import { Flex, Text } from "@chakra-ui/react";
import { Contact } from "./";

export const Home = () => {
	return (
		<Flex
			h="100vh"
			w="100vw"
			bg="blue.300"
			justify="center"
			alignItems="center"
		>
			<Flex
				w={{ base: "70%", md: "60%" }}
				h={{ md: "60%" }}
				p="1rem"
				direction={{ base: "column", md: "row-reverse" }}
				bg="#eee"
				border="1px solid #c2c2c2"
				borderRadius="8px"
				boxShadow="Dark lg"
			>
				<Contact />
				<Text m="1rem" >
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</Text>
			</Flex>
		</Flex>
	);
};
