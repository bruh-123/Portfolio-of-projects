import { Avatar, Stack, IconButton, Spacer, Link } from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { useBreakpointValue } from "@chakra-ui/media-query";

export const Contact = () => {
	const avatarSize = useBreakpointValue({ base: "lg", md: "2xl", lg: "2xl" });
	return (
		<Stack
			align={{ base: "center", md: "flex-end" }}
			direction={{ base: "row", md: "column-reverse" }}
		>
			<Link
				href="https://www.linkedin.com/in/bruno-matias-riquelme/"
				isExternal
			>
				<IconButton
					variant="unstyled"
					aria-label="linkedin profile"
					as={FaLinkedin}
					color="#0077B5"
					href="www.linkedin.com/in/bruno-matias-riquelme
"
				/>
			</Link>
			<Link href="https://github.com/bruh-123" isExternal>
				<IconButton
					variant="unstyled"
					aria-label="github profile"
					as={FaGithub}
				/>
			</Link>
			<Link href="https://twitter.com/Bruh__no" isExternal>
				<IconButton
					variant="unstyled"
					aria-label="twitter profile"
					as={FaTwitter}
					color="#6CADDE"
				/>
			</Link>
			<Spacer size="0" />
			<Avatar
				size={avatarSize}
				name="Segun Adebayo"
				//src="https://bit.ly/sage-adebayo"
				src="./front.png"
				//src="./logo512.png"
			/>
		</Stack>
	);
};
