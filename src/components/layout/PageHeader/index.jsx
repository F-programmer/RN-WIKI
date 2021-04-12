// libs
import React from "react";

// components
import { Grid, Paper } from "components/MU";

function PageHeader({ title = "" }) {
	return (
		<Paper>
			<Grid container justify="center">
				{title}
			</Grid>
		</Paper>
	);
}

export default PageHeader;
export { PageHeader };
