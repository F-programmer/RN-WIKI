// libs
import React from "react";
import { Button } from "react-native-paper";

// componentes
import { Box, Grid } from "components/MU";
import PageHeader from "components/layout/PageHeader";
import UIText from "components/UI/Text";

function State({ setVal, val }) {
	return (
		<Box p=".5rem">
			<PageHeader
				title={
					<UIText color="var(--primary)" size={25} weight={500}>
						Estado
					</UIText>
				}
			/>
			<Box ml="1.3rem" mt="1.3rem">
				<Grid container>
					<Grid item xs={10}>
						<UIText size={16}>
							Estado é a forma do React armazenar objetos mutaveis em sua
							imutabilidade.
							<br />
							Vamos por parte, todas as renderizações feitas pelo React
							são imutaveis, jamais mudarão.
							<br /> Porém isso gera um problema, pois diversas
							interações do usuário necessitam de mudanças na página. Por
							exemplo, imagine um botão que incrementa um contador
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
								var contador = 0;
								<br />
								<br />
								...
								<br />
								{`<button onClick={() => (contador += 1)}>`}
								<br />
								Incrementar o contador
								<br />
								{`</button>`}
							</UIText>
						</Box>
					</Grid>
					<Grid item xs={10}>
						<UIText size={16}>
							Isto não funcionará para o React, pois temos a
							imutabilidade.
						</UIText>
					</Grid>
					<Grid item xs={10}>
						<Box mt="1.3rem">
							<UIText color="var(--primary)" size={18}>
								Como resolver?
							</UIText>
						</Box>
					</Grid>
					<Grid item xs={10}>
						<UIText size={16}>
							Para resolver isso, vamos criar um estado, para
							solicitarmos uma atualização de renderização do React.
							<br />
							<br />
							Utilizando o useState precisamos declarar 2 variaveis, o
							repositório do nosso valor e a ação da mudança de valor.
							<br />
							<br />E depois só passamos o novo valor na ação, dentro da
							interação do usuário
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
								import {`{useState}`} from "React";
								<br />
								const [contador, setContador] = useState(0); // valor
								inicial
								<br />
								<br />
								...
								<br />
								{`<button onClick={() => setContador(contador + 1)}>`}
								<br />
								Incrementar o contador
								<br />
								{`</button>`}
							</UIText>
						</Box>
					</Grid>
					<Grid item xs={10}>
						<UIText size={16}>
							E tcharam, temos uma nova renderização para nosso estado.
						</UIText>
					</Grid>
					<Grid item xs={10}>
						<Box mt="1.3rem">
							<UIText color="var(--primary)" size={18}>
								Teste o exemplo apresentado acima
							</UIText>
						</Box>
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
				</Grid>
			</Box>
		</Box>
	);
}

export default State;
export { State };
