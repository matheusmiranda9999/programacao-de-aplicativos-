// Importa a biblioteca prompt-sync
const prompt = require("prompt-sync")();

// Solicita os dados do terreno
let largura = parseFloat(prompt("Digite a largura do terreno (em metros): "));
let profundidade = parseFloat(prompt("Digite a profundidade do terreno (em metros): "));

// Calcula a área
let area = largura * profundidade;

console.log(`Área total do estabelecimento: ${area} m²`);

// Classifica com base na área
if (area >= 0 && area <= 49) {
    console.log("Classificação: Mercearia");
} else if (area >= 50 && area <= 399) {
    console.log("Classificação: Mercadinho");
} else if (area >= 400 && area <= 999) {
    console.log("Classificação: Mercado");
} else if (area >= 1000 && area <= 2499) {
    console.log("Classificação: Supermercado");
} else if (area >= 2500) {
    console.log("Classificação: Hipermercado");
} else {
    console.log("Área inválida.");
}
