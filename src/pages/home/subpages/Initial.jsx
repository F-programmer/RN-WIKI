// libs
import React from "react";
import { Button } from "react-native-paper";

// componentes
import { Box, Grid } from "components/MU";
import PageHeader from "components/layout/PageHeader";
import UIText from "components/UI/Text";

function Initial() {
	return (
		<Box p=".5rem">
			<PageHeader
				title={
					<UIText color="var(--primary)" size={25} weight={500}>
						Bem vind@ ao React-Native - Wiki
					</UIText>
				}
			/>
			<Box ml="1.3rem" mt="1.3rem">
				<Grid container>
					<Grid item xs={10}>
						<UIText size={16}>
							Este 'wiki' tem como propósito auxiliar no desenvolvimento
							com React/React-Native.
							<br />
							<br />
							<br />
							Contato:
							<br />
							<Button mode="contained">
								<a
									target="_blank"
									href="https://www.linkedin.com/in/flavio-henrique-vt/"
								>
									Linkedin
								</a>
							</Button>
							<br />
							<br />
							Email: flaviovhtorres@gmail.com
						</UIText>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}

export default Initial;
export { Initial };
