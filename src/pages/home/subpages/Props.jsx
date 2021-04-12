// libs
import React from "react";

// componentes
import { Box, Grid } from "components/MU";
import PageHeader from "components/layout/PageHeader";
import UIText from "components/UI/Text";

// icons
import { FontAwesome5 } from "@expo/vector-icons";

function Props() {
	const comidas = ["Hamburguer", "Hot-dog", "Refrigerante", "Batatas fritas"];
	const titulosComida = "Comidas";

	return (
		<Box p=".5rem">
			<PageHeader
				title={
					<UIText color="var(--primary)" size={25} weight={500}>
						Propiedades
					</UIText>
				}
			/>
			<Box ml="1.3rem" mt="1.3rem">
				<Grid container>
					<Grid item xs={10}>
						<UIText size={16}>
							Este é um complemento da componentização, recomendo que o
							veja primeiro, pois irei utilizar o exemplo anterior.
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
								{`function MinhaLista({ linhas = [], titulo }) {`}
								<br />
								{`return (`}
								<br />
								{`<div>`}
								<br />
								{`<h3>{titulo}</h3>`}
								<br />
								{`<ul>`}
								<br />
								{`{linhas.map((item) => (`}
								<br />
								{`<li>{item}</li>`}
								<br />
								{`))}`}
								<br />
								{`</ul>`}
								<br />
								{`</div>`}
								<br />
								{`);`}
								<br />
								<br />
								const comidas = ["Hamburguer", "Hot-dog",
								"Refrigerante", "Batatas fritas"];
								<br />
								const titulosComida = "Comidas";
								<br />
								<br />
								<MinhaLista linhas={comidas} titulo={titulosComida} />
							</UIText>
						</Box>
					</Grid>
					<Grid item xs={10}>
						<UIText size={16}>
							Propriedades são basicamente a customização de algumas
							informações do elemento para a configuração ideal para a
							página.
							<br />
							Neste exemplo, temos o componente MinhaLista, que renderiza
							uma lista com título e aceita o título e as linhas como
							customização.
							<br />
							Se quiséssemos, poderíamos customizar qualquer coisa, desde
							que configuremos nosso componente para aceitá-la.
						</UIText>
					</Grid>
					<Grid item xs={10}>
						<Box mt="1.3rem">
							<UIText color="var(--primary)" size={18}>
								Tire suas conclusões
							</UIText>
						</Box>
					</Grid>
					<Grid item xs={10}>
						<UIText size={16}>
							Dê uma olhada nessa página e perceba quais componentes eu
							reutilizei.
							<br />
							Percebeu o título das páginas?
							<br />
							Percebeu os ícones do menu?
							<br />
							Perebeu este texto que você está lendo agora?
						</UIText>
					</Grid>
					<Grid item xs={10}>
						<Box mt="1.3rem">
							<UIText color="var(--primary)" size={18}>
								Tudo que é bom, acaba
							</UIText>
						</Box>
					</Grid>
					<Grid item xs={10}>
						<UIText size={16}>
							E encerramos por aqui
							<br />
							Se ficou com alguma dúvida, não hesite em me mandar uma
							mensagem : )
							<br />
							<br />
							<br />
							Flávio{" "}
							<FontAwesome5
								size={15}
								color="var(--primary)"
								name="coffee"
							/>{" "}
						</UIText>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}

export default Props;
export { Props };

function MinhaLista({ linhas = [], titulo }) {
	return (
		<div>
			<h3>{titulo}</h3>
			<ul>
				{linhas.map((item) => (
					<li>{item}</li>
				))}
			</ul>
		</div>
	);
}
