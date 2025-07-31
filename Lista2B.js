// Importa a biblioteca prompt-sync
const prompt = require("prompt-sync")();

// Solicita um número ao usuário
let numero = parseInt(prompt("Digite um número: "));

// Verifica se é par ou ímpar
if (numero % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}
