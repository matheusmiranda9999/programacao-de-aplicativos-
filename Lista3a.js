// Importando a biblioteca prompt-sync
const prompt = require("prompt-sync")();

// Inicializando a variável de experiência
let experienciaTotal = 0;

// Laço for para simular 10 batalhas
for (let i = 1; i <= 10; i++) {
    console.log(`Batalha ${i}: Você ganhou 10 pontos de experiência!`);
    experienciaTotal += 10;
}

// Exibindo a experiência total
console.log(`\nTotal de experiência recebida: ${experienciaTotal} pontos.`);
