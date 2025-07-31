// Importa a biblioteca prompt-sync
const prompt = require("prompt-sync")();

// Cria um array para armazenar os números
let numeros = [];

// Recebe 5 números do usuário
for (let i = 1; i <= 5; i++) {
    let numero = parseFloat(prompt(`Digite o ${i}º número: `));
    numeros.push(numero);
}

// Encontra o maior e o menor número
let maior = Math.max(...numeros);
let menor = Math.min(...numeros);

// Exibe o resultado
console.log(`O maior número é: ${maior}`);
console.log(`O menor número é: ${menor}`);
