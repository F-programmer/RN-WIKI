// libs
import React from "react";
import { Button } from "react-native-paper";

// componentes
import { Box, Grid } from "components/MU";
import PageHeader from "components/layout/PageHeader";
import UIText from "components/UI/Text";

// share
import { useNavigation } from "@react-navigation/core";

function Spa() {
	const router = useNavigation();

	return (
		<Box p=".5rem">
			<PageHeader
				title={
					<UIText color="var(--primary)" size={25} weight={500}>
						SPA
					</UIText>
				}
			/>
			<Box ml="1.3rem" mt="1.3rem">
				<Grid container>
					<Grid item xs={10}>
						<UIText size={16}>
							SPA significa Single Page Application (Aplicação de uma
							única página).
							<br />O React utiliza para performance, é um conceito de
							renderização que consiste em ter uma única fonte de
							execução, e apenas distribuir as páginas, diferente de uma
							renderização padrão em HTML, onde você tem vários arquivos
							e acessa um novo quando trocar de página.
						</UIText>
					</Grid>
					<Grid item xs={10}>
						<Box mt="1.3rem">
							<UIText color="var(--primary)" size={18}>
								Teste você mesmo!
							</UIText>
						</Box>
					</Grid>
					<Grid item xs={10}>
						<UIText size={16}>
							Isso pode ser facilmente testado em um navegador, fique
							atento a barra em cima, no canto superior esquerdo, quando
							você acessa uma página, ocorre uma animação, de giro ou um
							carregamento linear.
							<br />
							Fique olhando e aperte no botão abaixo para acessar uma
							nova tela. Caso ocorra uma animação, eu sou um mau
							desenvolvedor XD
						</UIText>
					</Grid>
					<Grid item xs={10}>
						<Button mode="contained" onPress={() => router.push("spa")}>
							Me aperte para acessar uma nova tela!
						</Button>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}

export default Spa;
export { Spa };
