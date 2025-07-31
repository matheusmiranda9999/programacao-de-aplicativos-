// Importando a biblioteca prompt-sync
const prompt = require("prompt-sync")();

let maior = -Infinity;
let menor = Infinity;
let soma = 0;
let quantidade = 0;

while (true) {
    let numero = parseFloat(prompt("Digite um número (0 para encerrar): "));

    if (numero === 0) {
        break; // Encerra a leitura
    }

    if (isNaN(numero)) {
        console.log("Valor inválido. Digite um número.");
        continue;
    }

    if (numero > maior) maior = numero;
    if (numero < menor) menor = numero;

    soma += numero;
    quantidade++;
}

// Exibindo resultados
if (quantidade === 0) {
    console.log("\nNenhum número válido foi digitado.");
} else {
    let media = soma / quantidade;
    console.log(`\nMaior número: ${maior}`);
    console.log(`Menor número: ${menor}`);
    console.log(`Média aritmética: ${media.toFixed(2)}`);
}
