// Importando a biblioteca prompt-sync
const prompt = require("prompt-sync")();

const vetor1 = [];
const vetor2 = [];
const vetorSoma = [];

console.log("Digite 15 números inteiros para o primeiro vetor:");
for (let i = 0; i < 15; i++) {
    let valor = parseInt(prompt(`Vetor 1 [posição ${i}]: `));
    while (isNaN(valor)) {
        valor = parseInt(prompt(`Valor inválido. Digite novamente Vetor 1 [posição ${i}]: `));
    }
    vetor1.push(valor);
}

console.log("\nDigite 15 números inteiros para o segundo vetor:");
for (let i = 0; i < 15; i++) {
    let valor = parseInt(prompt(`Vetor 2 [posição ${i}]: `));
    while (isNaN(valor)) {
        valor = parseInt(prompt(`Valor inválido. Digite novamente Vetor 2 [posição ${i}]: `));
    }
    vetor2.push(valor);
}

// Criando o vetor de soma
for (let i = 0; i < 15; i++) {
    vetorSoma.push(vetor1[i] + vetor2[i]);
}

// Exibindo os vetores
console.log("\n=== Vetores e Soma ===");
console.log("Vetor 1:", vetor1);
console.log("Vetor 2:", vetor2);
console.log("Vetor Soma:", vetorSoma);
