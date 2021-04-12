// libs
import React from "react";

// componentes
import { Box, Grid, List } from "components/MU";
import PageHeader from "components/layout/PageHeader";
import UIText from "components/UI/Text";

// icons
import { FontAwesome5 } from "@expo/vector-icons";

function Components() {
	const comidas = ["Hamburguer", "Hot-dog", "Refrigerante", "Batatas fritas"];
	const pedidos = [
		"3 X-Tudo",
		"2 Hot-dog e 1 X-Salada",
		"4 Refris e 1 Batata",
		"1 X-Egg",
		"3 Refris e 2 Batata",
		"2 Batatas",
	];
	const estoques = [
		"Pão de Hamburguer",
		"Salsicha",
		"Gelo",
		"Batata",
		"Sal",
		"Ketchup",
	];

	const titulosComida = "Comidas";
	const titulosPedidos = "Pedidos";
	const titulosEstoque = "Estoque";

	return (
		<Box p=".5rem">
			<PageHeader
				title={
					<UIText color="var(--primary)" size={25} weight={500}>
						Componentes
					</UIText>
				}
			/>
			<Box ml="1.3rem" mt="1.3rem">
				<Grid container>
					<Grid item xs={10}>
						<UIText size={16}>
							Componentes é uma forma de economizar muito tempo no React,
							e acredite em mim quando digo <b>muito tempo.</b>
							<br />
							Não vou entrar em muitos detalhes, pois você verá com seus
							próprios olhos essa magia{" "}
							<FontAwesome5
								size={15}
								color="var(--primary)"
								name="magic"
							/>{" "}
							acontecendo, então aparate para a próxima seção.
						</UIText>
					</Grid>
					<Grid item xs={10}>
						<Box mt="1.3rem">
							<UIText color="var(--primary)" size={18}>
								<FontAwesome5
									size={20}
									color="var(--primary)"
									name="hat-wizard"
								/>{" "}
								Abra-cadra e surge a magia da componentização
							</UIText>
						</Box>
					</Grid>
					<Grid item xs={10}>
						<UIText size={16}>
							Imagine que você precise renderizar 3 listas, uma para
							pratos, uma para pedidos e uma para o estoque de um
							restaurante. Normalmente, você faria isso em HTML padrão:
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
								{`<div>`}
								<br />
								{`	<h3>Pratos</h3>`}
								<br />
								{`	<ul>`}
								<br />
								{`		<li>Hamburguer</li>`}
								<br />
								{`		<li>Hot-dog</li>`}
								<br />
								{`		<li>Refrigerante</li>`}
								<br />
								{`		<li>Batatas fritas</li>`}
								<br />
								{`	</ul>`}
								<br />
								{`</div>`}
								<br />
								{`<br />`}
								<br />
								{`<div>`}
								<br />
								{`	<h3>Pedidos</h3>`}
								<br />
								{`	<ul>`}
								<br />
								{`		<li>3 X-Tudo</li>`}
								<br />
								{`		<li>2 Hot-dog e 1 X-Salada</li>`}
								<br />
								{`		<li>4 Refris e 1 Batata</li>`}
								<br />
								{`		<li>1 X-Egg</li>`}
								<br />
								{`		<li>3 Refris e 2 Batata</li>`}
								<br />
								{`		<li>2 Batatas</li>`}
								<br />
								{`	</ul>`}
								<br />
								{`</div>`}
								<br />
								{`<br />`}
								<br />
								{`<div>`}
								<br />
								{`	<h3>Estoque</h3>`}
								<br />
								{`	<ul>`}
								<br />
								{`		<li>Pão de Hamburguer</li>`}
								<br />
								{`		<li>Salsicha</li>`}
								<br />
								{`		<li>Gelo</li>`}
								<br />
								{`		<li>Batata</li>`}
								<br />
								{`		<li>Sal</li>`}
								<br />
								{`		<li>Ketchup</li>`}
								<br />
								{`	</ul>`}
								<br />
								{`</div>`}
								<br />
								<br />
								E obteria:
								<br />
								<div>
									<h3>Pratos</h3>
									<ul>
										<li>Hamburguer</li>
										<li>Hot-dog</li>
										<li>Refrigerante</li>
										<li>Batatas fritas</li>
									</ul>
								</div>
								<br />
								<div>
									<h3>Pedidos</h3>
									<ul>
										<li>3 X-Tudo</li>
										<li>2 Hot-dog e 1 X-Salada</li>
										<li>4 Refris e 1 Batata</li>
										<li>1 X-Egg</li>
										<li>3 Refris e 2 Batata</li>
										<li>2 Batatas</li>
									</ul>
								</div>
								<br />
								<div>
									<h3>Estoque</h3>
									<ul>
										<li>Pão de Hamburguer</li>
										<li>Salsicha</li>
										<li>Gelo</li>
										<li>Batata</li>
										<li>Sal</li>
										<li>Ketchup</li>
									</ul>
								</div>
							</UIText>
						</Box>
					</Grid>
					<Grid item xs={10}>
						<UIText size={16}>
							Percebe que nossa sintaxe HTML é identica? Apenas mudamos
							os valores de cada linha.
							<br />
							Agora imagine que você precise fazer mais 20 listas, com
							outros valores, com um css variando e... ufa, que trampo.
							<br />
							<br />
							<br />
							Mas vams pensar, e se usassemos nossos grandes poderes
							fornecidos pela primeira estrela React para criar uma
							estrutura que apenas variasse as informações?
							<br />
							Então arregassa as mangas ai, pega sua varinha e sua coruja
							e vamos fazer um pouco de mágia.
						</UIText>
					</Grid>
					<Grid item xs={10}>
						<Box mt="1.3rem">
							<UIText color="var(--primary)" size={18}>
								<FontAwesome5
									size={20}
									color="var(--primary)"
									name="hat-wizard"
								/>{" "}
								Estrurando nosso componente
							</UIText>
						</Box>
					</Grid>
					<Grid item xs={10}>
						<UIText size={16}>
							Temos uma estrutura
							<List title="div" />
							<List title="h3" />
							<List title="ul" />
							<List title="li" />
							<List title="br" />
							<br />
							Então vamos montar uma estrutura
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
								{`function MinhaLista() {`}
								<br />
								return (
								<br />
								{`<div>`}
								<br />
								{`	<h3></h3>`}
								<br />
								{`	<ul>`}
								{`	</ul>`}
								<br />
								{`</div>`}
								<br />
								);
								<br />
								{`}`}
							</UIText>
						</Box>
					</Grid>
					<Grid item xs={10}>
						<UIText size={16}>
							Perceba que todos os nossos elementos estão ai, com exceção
							das linhas e do título. Isso foi proposital, pois eles não
							são fixos, a informação contida neles varia.
							<br />
							Então como pegamos esses valores? Bom, vou lhe dar um pouco
							de spoiler do próximo tópico então apenas faça e depois vá
							para a explicação em Propriedades beleza?
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
								{`function MinhaLista({linhas = [], titulo}) {`}
								<br />
								return (
								<br />
								{`<div>`}
								<br />
								{`	<h3>{titulo}</h3>`}
								<br />
								{`	<ul>`}
								<br />
								{`linhas.map(item=>(`}
								<br />
								{`<li>{item}</li>`}
								<br />
								{`));`}
								<br />
								{`	</ul>`}
								<br />
								{`</div>`}
								<br />
								);
								<br />
								{`}`}
							</UIText>
						</Box>
					</Grid>
					<Grid item xs={10}>
						<UIText size={16}>
							Como eu disse, vou abordar os detalhes mais a frente, então
							vamos nos concentrar na estrutura.
							<br />
							Perceba que nossa estrutura está ai, quase idêntica a
							anterior, com algumas modificações apenas.
							<br />
							<br />
							E agora vem a pergunta de um milhão de dólares: Como raios
							eu uso isso?
							<br />A resposta é muito simples, basta utilizar como
							sintaxe HTML normal, porém utilizando nosso componente,
							assim:
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
								{`<MinhaLista linhas={comidas} titulo={titulosComida}/>`}
							</UIText>
						</Box>
					</Grid>
					<Grid item xs={10}>
						<UIText size={16}>
							Beleza, mas como eu passo as informações para essa bruxaria
							ai?
							<br />
							Bom, perceba que temos ali dois atributos: linhas e titulo,
							eles serão nossa 'porta' para o conhecimento, ou seja, eu
							só preciso ter essas informações e passá-las para que o
							nosso complexo algoritmo mágico interprete e renderize.
							Mais ou menos assim:
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
								const comidas = ['Hamburguer', 'Hot-dog',
								'Refrigerante', 'Batatas fritas'];
								<br />
								const titulosComida = "Comidas";
								<br />
								{`<MinhaLista linhas={comidas} titulo={titulosComida}/>`}
								E obteremos
								<MinhaLista linhas={comidas} titulo={titulosComida} />
							</UIText>
						</Box>
					</Grid>
					<Grid item xs={10}>
						<UIText size={16}>
							Uuuuaaaaaaaauuuuu
							<br />
							Mas como eu repito para as 3 listas?
							<br />
							Simples, apenas mude os valores, e passa a marcação HTML
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
								const comidas = ['Hamburguer', 'Hot-dog',
								'Refrigerante', 'Batatas fritas'];
								<br />
								const pedidos = [ "3 X-Tudo", "2 Hot-dog e 1 X-Salada",
								"4 Refris e 1 Batata", "1 X-Egg", "3 Refris e 2 Batata",
								"2 Batatas", ];
								<br />
								const estoques = [ "Pão de Hamburguer", "Salsicha",
								"Gelo", "Batata", "Sal", "Ketchup", ]; const
								titulosComida = "Comidas";
								<br />
								const titulosPedidos = "Pedidos";
								<br />
								const titulosEstoque = "Estoque";
								{`<MinhaLista linhas={comidas} titulo={titulosComida}/>`}
								E obteremos
								<MinhaLista linhas={comidas} titulo={titulosComida} />
								<MinhaLista linhas={pedidos} titulo={titulosPedidos} />
								<MinhaLista linhas={estoques} titulo={titulosEstoque} />
							</UIText>
						</Box>
					</Grid>
					<Grid item xs={10}>
						<UIText size={16}>
							Viu como é simples? você monta uma estrutura e apens
							replica mudando os valores, um pouco de hocus pocus e
							vóila, a mesma página e um tempinho para aquele coffee
							break{" "}
							<FontAwesome5
								size={15}
								color="var(--primary)"
								name="coffee"
							/>{" "}
							<br />
							<br />
							Agora toma seu café e vai ver as propriedades : )
						</UIText>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}

export default Components;
export { Components };

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
