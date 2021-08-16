import { Flex, Box, Text, Button, Image } from "@chakra-ui/react";
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
				w="400px"
				p="1rem"
				direction="row"
				bg="#eee"
				border="1px solid #c2c2c2"
				borderRadius="8px"
				boxShadow="Dark lg"
			>
				<Text>Hey, What's up? I am a web developer</Text>
				<Contact />
			</Flex>
		</Flex>
	);
};
