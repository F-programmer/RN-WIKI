import React, { useState, useEffect, useLayoutEffect } from "react";
import { BottomNavigation } from "react-native-paper";
import { useDispatch } from "react-redux";
import { setHeaderVisibility } from "store/modules/header/actions";

import UIView from "components/UI/View";
import Grid from "components/MU/Grid";
import Scroll from "components/UI/Scroll";
import Box from "components/MU/Box";

export default function BottomNav({ items = [] }) {
	const dispatch = useDispatch();
	const [h, setH] = useState(`calc(100vh - 100px)`);
	const [index, setIndex] = React.useState(0);

	useEffect(() => {
		const config = () => {
			try {
				const element = document.getElementById("navbar");
				const element2 = document.getElementById("bottomNavigation");
				const height = element.clientHeight + element2.clientHeight;
				const newH = `calc(100vh - ${height}px)`;
				setH(newH);
			} catch {
				return null;
			}
		};

		dispatch(setHeaderVisibility(true));

		config();
	}, [items]);

	const [routes] = useState(items);

	const mapItems = items.map((item) => ({
		[item.key]: item.children,
	}));
	const map = mapItems.reduce((acumulator, newValue) =>
		Object.assign({}, acumulator, newValue)
	);

	const renderScene = BottomNavigation.SceneMap(map);

	return (
		<UIView>
			<Grid container direction="column" justify="space-between" h="100%">
				<Grid item>
					<Scroll direction="vertical" scrollWhen="scroll" h={h}>
						{items.map((item, i) => (
							<Box display={i === index ? "auto" : "none"}>
								{item.children()}
							</Box>
						))}
					</Scroll>
				</Grid>
				<Grid item id="bottomNavigation">
					<BottomNavigation
						navigationState={{ index, routes }}
						onIndexChange={setIndex}
						renderScene={renderScene}
					/>
				</Grid>
			</Grid>
		</UIView>
	);
}
