import React from "react";

import { Container } from "./styles";

function Divider({ direction = "h" }) {
	return <Container direction={direction} />;
}

export default Divider;
export { Divider };
