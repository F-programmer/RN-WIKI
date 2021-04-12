// libs
import React from "react";
import { Button } from "react-native-paper";

// componentes
import { Box, Grid } from "components/MU";
import PageHeader from "components/layout/PageHeader";
import UIText from "components/UI/Text";

function Effect({ setVal, val, color }) {
	return (
		<Box p=".5rem">
			<PageHeader
				title={
					<UIText color="var(--primary)" size={25} weight={500}>
						Efeito
					</UIText>
				}
			/>
			<Box ml="1.3rem" mt="1.3rem">
				<Grid container>
					<Grid item xs={10}>
						<UIText size={16}>
							Efeito é uma funcionalidade do React que permite vincular
							ações a objetos, valores, outras ações ou nada
							(dependências). É muito útil para chamadas de api ou
							requisições assíncronas.
							<br /> Para utilizar basta passar uma função (a ação) e
							suas dependências para a reação em cadeia, caso não haja, o
							efeito será acionado uma única vez.
						</UIText>
					</Grid>
					<Grid item xs={10}>
						<Box
							bgcolor="#aaa"
							mt="15px"
							p=".5rem"
							moreStyles="border-radius: 10px;"
						>
							<UIText size={16}>
								import {`{useEffect}`} from "React";
								<br />
								<br />
								{`useEffect(() => {`}
								<br />
								console.log("Olá mundo, você me verá apenas uma vez")
								<br />
								{`}}, []) // nao há dependências`}
								<br />
							</UIText>
						</Box>
					</Grid>
					<Grid item xs={10}>
						<Box mt="1.3rem">
							<UIText color="var(--primary)" size={18}>
								Exemplo interativo
							</UIText>
						</Box>
					</Grid>
					<Grid item xs={10}>
						<UIText size={16} color={color}>
							Seguindo o exemplo do estado, vinculamos uma ação para
							mudar a cor deste texto aleatóriamente toda vez que o
							contador for atualizado
						</UIText>
					</Grid>
					<Grid item xs={10} container>
						<Grid item xs={10}>
							<UIText size={16}>Este é o valor atual: {val}</UIText>
						</Grid>
						<Grid item>
							<Button mode="contained" onPress={() => setVal(val + 1)}>
								Me aperte para incrementar o valor
							</Button>
						</Grid>
					</Grid>
					<Grid item xs={10}>
						<UIText size={16}>
							As ações não se interferem, apenas possuem um vínculo
						</UIText>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}

export default Effect;
export { Effect };
