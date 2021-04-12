// libs
import React from "react";
import { Appbar } from "react-native-paper";

// componentes
import IconButton from "components/MU/IconButton";

// icons
import { FontAwesome5 } from "@expo/vector-icons";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getHeader, setDrawer } from "store/modules/rootActions";

function Navbar({ navigation, previous }) {
	const dispatch = useDispatch();
	const header = useSelector(getHeader);

	const handleDrawer = () => {
		if (header.drawer) {
			dispatch(
				setDrawer({
					...header.drawer,
					show: !header.drawer.show,
				})
			);
		}
	};

	return (
		<>
			<div id="navbar">
				{header.visible ? (
					<Appbar.Header>
						{header.menuBtn && header.drawer ? (
							<IconButton onClick={handleDrawer}>
								<FontAwesome5
									size={25}
									color="var(--white)"
									name="bars"
								/>
							</IconButton>
						) : (
							""
						)}
						{previous && header.showBtn ? (
							<Appbar.BackAction onPress={navigation.goBack} />
						) : null}
						<Appbar.Content title="React-Native Wiki" />
					</Appbar.Header>
				) : (
					""
				)}
			</div>
		</>
	);
}

export default Navbar;
