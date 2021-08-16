import {
	Avatar,
	AvatarBadge,
	AvatarGroup,
	Stack,
	Icon,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

export const Contact = () => {
	return (
		<Stack>
			<Avatar name="Bruno Riquelme" src="..extra/front.jpg" />
			<Icon as={FaGithub} />
		</Stack>
	);
};
