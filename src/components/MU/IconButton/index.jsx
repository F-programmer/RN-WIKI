import React from "react";

import { Container } from "./styles";

function IconButton({ children, onClick, size = "50px" }) {
	return (
		<Container size={size} onClick={onClick}>
			{children}
		</Container>
	);
}

export default IconButton;
export { IconButton };
