// libs
import React, { useState, useEffect } from "react";

// components
import { Grid, Box, Drawer, List, ListItem } from "components/MU";
import { UIView, UIScroll } from "components/UI";

// redux
import { useDispatch, useSelector } from "react-redux";
import {
	setHeaderMenuBtn,
	getHeader,
	setDrawer,
} from "store/modules/rootActions";

// icons
import { FontAwesome5 } from "@expo/vector-icons";

// subpages
import {
	Initial,
	Memo,
	Spa,
	State,
	Effect,
	Components,
	Props,
} from "./subpages";
import { getRandomColor } from "utils/randomColor";

export default function Home() {
	const dispatch = useDispatch();
	const header = useSelector(getHeader);

	const [h, setH] = useState(`calc(100vh - 100px)`);
	useEffect(() => {
		const element = document.getElementById("navbar");
		const height = element.clientHeight;
		const newH = `calc(100vh - ${height}px)`;
		setH(newH);
	}, []);

	useEffect(() => {
		dispatch(setHeaderMenuBtn(true));
		dispatch(
			setDrawer({
				width: "220px",
				bgcolor: "var(--primary_light)",
				title: "Navegação",
				show: true,
			})
		);
	}, []);

	const subpages = [Initial, Memo, Spa, State, Effect, Components, Props];
	const [currentRender, setCurrentRender] = useState(0);

	const handleClick = (n) => setCurrentRender(n);

	const [val, setVal] = useState(0);
	const [color, setColor] = useState("#000");

	useEffect(() => {
		if (val > 0) setColor(getRandomColor());
	}, [val]);

	return (
		<UIView>
			<Drawer {...header.drawer}>
				<List
					title="Inicio"
					icon={
						<FontAwesome5 size={15} color="var(--white)" name="home" />
					}
					onClick={() => handleClick(0)}
					dividers
				/>
				<List
					title="Renderização"
					icon={
						<FontAwesome5 size={15} color="var(--white)" name="sync" />
					}
					expand
				>
					<ListItem
						title="Memorização"
						dividers
						onClick={() => handleClick(1)}
					/>
					<ListItem title="SPA" dividers onClick={() => handleClick(2)} />
					<ListItem
						title="Estado"
						dividers
						onClick={() => handleClick(3)}
					/>
					<ListItem
						title="Efeito"
						dividers
						onClick={() => handleClick(4)}
					/>
				</List>
				<List
					title="Componentização"
					icon={
						<FontAwesome5
							size={15}
							color="var(--white)"
							name="grip-horizontal"
						/>
					}
					expand
				>
					<ListItem
						title="Componente"
						dividers
						onClick={() => handleClick(5)}
					/>
					<ListItem
						title="Propriedades"
						dividers
						onClick={() => handleClick(6)}
					/>
				</List>
			</Drawer>
			<Box
				ml={header.drawer && header.drawer.show ? header.drawer.width : "0"}
			>
				<UIScroll direction="vertical" scrollWhen="scroll" h={h}>
					<Grid container>
						<Grid item xs={10}>
							{subpages.map((item, index) => {
								const Component = item;

								return (
									<Box
										display={
											index === currentRender ? "auto" : "none"
										}
									>
										<Component
											setVal={setVal}
											val={val}
											color={color}
										/>
									</Box>
								);
							})}
						</Grid>
					</Grid>
				</UIScroll>
			</Box>
		</UIView>
	);
}
