// gera uma cor aleatória em hexadecimal
export function getRandomColor() {
	var hexadecimais = "0123456789ABCDEF";
	var cor = "#";

	// Pega um número aleatório no array acima
	for (var i = 0; i < 6; i++) {
		//E concatena à variável cor
		cor += hexadecimais.split("")[Math.floor(Math.random() * 16)];
	}
	return cor;
}
