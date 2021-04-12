// libs
import React from "react";

// componentes
import { Box, Grid, List } from "components/MU";
import UIText from "components/UI/Text";
import PageHeader from "components/layout/PageHeader";

// icons
import { FontAwesome5 } from "@expo/vector-icons";

function Memo() {
	return (
		<Box p=".5rem">
			<PageHeader
				title={
					<UIText color="var(--primary)" size={25} weight={500}>
						Memorização
					</UIText>
				}
			/>
			<Box ml="1.3rem" mt="1.3rem">
				<Grid container>
					<Grid item xs={10}>
						<UIText size={16}>
							Para entendermos a memorização primeiro precisamos
							compreender a renderização do React.
							<br />
							De forma resumida, funciona assim:
						</UIText>
					</Grid>
					<Grid item xs={10}>
						<List
							icon={
								<FontAwesome5
									size={10}
									color="var(--primary_light)"
									name="circle"
								/>
							}
							title="1ª Renderizção - A marcação da página (HTML) é renderizada"
						/>
						<List
							icon={
								<FontAwesome5
									size={10}
									color="var(--primary_light)"
									name="circle"
								/>
							}
							title={
								<>
									Demais renderizações:
									<br />
									Ocorre uma verficação no DOM para verificar se a
									página atual necessita de atualizações, comparando
									com uma nova página pré-processada. Caso sim,
									renderizará a página novamente, caso não, renderizará
									a mesma página
									<br />
									<br />
									if (pagina != novaPágina) renderizaNovaPagina()
									<br />
									<br />
									else renderizaPaginaAtual()
								</>
							}
						/>
					</Grid>
					<Grid item xs={10}>
						<UIText color="var(--primary)" size={18}>
							Agora sim, Memorização
						</UIText>
					</Grid>
					<Grid item xs={10}>
						<UIText size={16}>
							Memorização é um conceito um tanto quanto novo no React,
							basicamente é uma técnica para otimização, que executa ou
							recebe uma função compelxa a ser memorizada, e quando
							memorizada tem resultado salvo na memória.
							<br />
							Então quando executarmos essa função novamente, ocorrerá
							uma verificação durante a execução, que validará se o
							resultado dessa chamada de função é identico ao que já
							temos memorizado. Caso sim, a execução será imediatamente
							interrompida.
						</UIText>
					</Grid>
					<Grid item xs={10}>
						<List
							icon={
								<FontAwesome5
									size={10}
									color="var(--primary_light)"
									name="circle"
								/>
							}
							title="1ª Renderizção - A marcação da página (HTML) é renderizada e aplicado memorização quando necessário"
						/>
						<List
							icon={
								<FontAwesome5
									size={10}
									color="var(--primary_light)"
									name="circle"
								/>
							}
							title={
								<>
									Demais renderizações:
									<br />
									Ocorre uma verficação no DOM para verificar se a
									página atual necessita de atualizações, comparando
									com uma nova página pré-processada.
									<br />
									Caso sim, ocorrerá uma nova verificação para
									constatar se as atualizações implicarão em um estado
									conhecido.
									<br />
									Qualquer caso não, renderizará a mesma página
									<br />
									<br />
									if (pagina != novaPágina) {`{`}
									<br />
									<br />
									if (atualizações != memória) renderizaNovaPagina()
									<br />
									<br />
									else renderizaPáginaAtual()
									<br />
									{`}`}
									<br />
									else renderizaPáginaAtual()
								</>
							}
						/>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}

export default Memo;
export { Memo };
