import React from "react";
import { Button } from "react-native-paper";

import Grid from "components/MU/Grid";
import { UIText, UIView } from "components/UI";

// share
import { useNavigation } from "@react-navigation/core";

function SpaScreen() {
	const router = useNavigation();

	return (
		<UIView>
			<Grid container>
				<Grid item xs={10}>
					<UIText color="var(--primary)" size={18}>
						Está é uma página de exemplo
					</UIText>
				</Grid>
				<Grid item xs={3}>
					<Button mode="contained" onPress={() => router.goBack()}>
						Me aperte para voltar!
					</Button>
				</Grid>
			</Grid>
		</UIView>
	);
}

export default SpaScreen;
export { SpaScreen };
