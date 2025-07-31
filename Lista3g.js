// Importando a biblioteca prompt-sync (mantendo padrão do projeto)
const prompt = require("prompt-sync")();

// Inicializando os dois primeiros termos da série
let termo1 = 1;
let termo2 = 1;

console.log("Série de Fibonacci até o 15º termo:");
console.log(termo1);
console.log(termo2);

// Gerar os próximos termos até o 15º
for (let i = 3; i <= 15; i++) {
    let proximoTermo = termo1 + termo2;
    console.log(proximoTermo);
    
    // Atualizar os valores para o próximo loop
    termo1 = termo2;
    termo2 = proximoTermo;
}
