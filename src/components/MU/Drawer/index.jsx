import React from "react";

import { UIText } from "components/UI";

import { Grid, Box } from "../";

import { Container } from "./styles";

function Drawer({
	width = "150px",
	show = false,
	bgcolor = "#fff",
	children,
	title,
}) {
	return (
		<Container {...{ width, show, bgcolor }}>
			{show ? (
				<Grid container>
					{title ? (
						<Grid item xs={10}>
							<Box p=".5rem">
								<UIText size="20px" color="var(--white)" weight={500}>
									{title}
								</UIText>
							</Box>
						</Grid>
					) : (
						""
					)}
					<Grid item xs={10}>
						{children}
					</Grid>
				</Grid>
			) : (
				""
			)}
		</Container>
	);
}

export default Drawer;
export { Drawer };
