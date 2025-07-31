// Importando a biblioteca prompt-sync
const prompt = require("prompt-sync")();

const numeros = [];

console.log("Digite 30 números distintos:");

for (let i = 0; i < 30; i++) {
    let numero = parseFloat(prompt(`Número [posição ${i}]: `));

    while (isNaN(numero) || numeros.includes(numero)) {
        numero = parseFloat(prompt(`Valor inválido ou repetido. Digite outro número [posição ${i}]: `));
    }

    numeros.push(numero);
}

// Encontrar o índice do maior valor
let maiorValor = numeros[0];
let indiceMaior = 0;

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiorValor) {
        maiorValor = numeros[i];
        indiceMaior = i;
    }
}

console.log(`\nO maior valor é ${maiorValor}, encontrado na posição ${indiceMaior}.`);
