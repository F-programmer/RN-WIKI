import React, { useState } from "react";

import { Grid, Box, Collapse, ListItem } from "../index";

import { UIText } from "components/UI";

function List({
	title,
	icon,
	expand,
	dividers = false,
	onClick,
	children = [],
}) {
	const [show, setShow] = useState(null);

	const handleExpand = () => setShow(show === null ? true : !show);

	return (
		<Grid container>
			<Grid item xs={10}>
				<ListItem
					title={title}
					icon={icon}
					show={show}
					onExpand={expand ? handleExpand : null}
					onClick={!expand ? onClick : null}
					dividers={expand ? true : dividers}
				/>
			</Grid>
			<Grid item xs={10}>
				<Box bgcolor="var(--primary_dark)" display="block">
					<Collapse opened={show}>{children}</Collapse>
				</Box>
			</Grid>
		</Grid>
	);
}

export default List;
export { List };
