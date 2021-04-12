// libs
import React, { useState } from "react";

// components
import { Grid, Box, IconButton, Divider } from "../index";

import { UIText } from "components/UI";

// icons
import { FontAwesome5 } from "@expo/vector-icons";

function ListItem({
	title,
	dividers = false,
	icon,
	show = false,
	onExpand = null,
	onClick,
}) {
	const [titleColor, setTitleColor] = useState("var(--t-primary)");

	return (
		<Box
			p=".5rem"
			onClick={() => (onExpand ? onExpand() : onClick ? onClick() : {})}
			onMouseEnter={() => setTitleColor("var(--white)")}
			onMouseLeave={() => setTitleColor("var(--t-primary)")}
		>
			<Box
				p=".5rem"
				moreStyles=":hover{background: var(--primary);}"
				cursor="pointer"
			>
				<Grid container alignItems="center">
					{icon ? (
						<Grid item xs={1}>
							{icon}
						</Grid>
					) : (
						""
					)}
					<Grid item xs={icon && onExpand ? 8 : icon || onExpand ? 9 : 10}>
						<UIText color={titleColor}>{title}</UIText>
					</Grid>
					{onExpand ? (
						<Grid item xs={1}>
							<IconButton size="25px" onClick={onExpand}>
								<FontAwesome5
									size={15}
									color="var(--white)"
									name={show ? "chevron-up" : "chevron-down"}
								/>
							</IconButton>
						</Grid>
					) : (
						""
					)}
				</Grid>
			</Box>
			{dividers ? (
				<Grid item xs={10}>
					<Divider diretion="h" />
				</Grid>
			) : (
				""
			)}
		</Box>
	);
}

export default ListItem;
export { ListItem };
