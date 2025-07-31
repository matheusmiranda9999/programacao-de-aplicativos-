h// Importando a biblioteca prompt-sync
const prompt = require("prompt-sync")();

// Inicializando contadores
let pares = 0;
let impares = 0;

console.log("Digite 30 números inteiros:");

for (let i = 1; i <= 30; i++) {
    let numero = parseInt(prompt(`Número ${i}: `));

    if (isNaN(numero)) {
        console.log("Entrada inválida. Digite um número inteiro.");
        i--; // repete o mesmo número
        continue;
    }

    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

// Exibindo resultados
console.log(`\nTotal de números pares: ${pares}`);
console.log(`Total de números ímpares: ${impares}`);
