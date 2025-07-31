g// Importando a biblioteca prompt-sync
const prompt = require("prompt-sync")();

const valores = [];

console.log("Digite 30 valores reais:");

for (let i = 0; i < 30; i++) {
    let valor = parseFloat(prompt(`Valor [posição ${i}]: `));
    while (isNaN(valor)) {
        valor = parseFloat(prompt(`Valor inválido. Digite novamente [posição ${i}]: `));
    }
    valores.push(valor);
}

// Aplicando os ajustes
for (let i = 0; i < 30; i++) {
    if (i % 2 === 0) {
        // posição par → +2%
        valores[i] *= 1.02;
    } else {
        // posição ímpar → +5%
        valores[i] *= 1.05;
    }
}

// Exibindo o vetor ajustado
console.log("\n=== Vetor com ajustes ===");
for (let i = 0; i < 30; i++) {
    console.log(`Posição ${i}: ${valores[i].toFixed(2)}`);
}
