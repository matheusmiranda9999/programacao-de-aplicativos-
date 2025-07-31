// Importando a biblioteca prompt-sync
const prompt = require("prompt-sync")();

// Lê o número informado pelo usuário
let numero = parseInt(prompt("Digite um número para encontrar seus divisores: "));

if (isNaN(numero) || numero <= 0) {
    console.log("Número inválido. Digite um número inteiro maior que zero.");
} else {
    console.log(`\nDivisores de ${numero}:`);

    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            console.log(i);
        }
    }
}
