import React, { useRef } from "react";

import { Container } from "./styles";

function Collapse({ children, opened = null }) {
	const refs = useRef(<>{children}</>);

	return (
		<Container run={opened} height={refs.current.clientHeight}>
			<div ref={refs}>{opened === true ? <>{children}</> : ""}</div>
		</Container>
	);
}

export default Collapse;
export { Collapse };
