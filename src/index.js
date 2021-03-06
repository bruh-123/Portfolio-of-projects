import React from "react";
import ReactDOM from "react-dom";
import "./styles/global.css";
import { ChakraProvider } from "@chakra-ui/react";
import {App} from "./components/App"

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider>
			<App />
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
