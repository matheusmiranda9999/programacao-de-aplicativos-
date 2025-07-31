j// Importando a biblioteca prompt-sync (mesmo que não seja usada aqui, mantendo padrão do projeto)
const prompt = require("prompt-sync")();

// Alturas iniciais em metros
let alturaRomario = 1.50;
let alturaBebeto = 1.10;

// Taxas de crescimento em metros por ano
let crescimentoRomario = 0.02; // 2 centímetros
let crescimentoBebeto = 0.03;  // 3 centímetros

let anos = 0;

while (alturaBebeto <= alturaRomario) {
    alturaRomario += crescimentoRomario;
    alturaBebeto += crescimentoBebeto;
    anos++;
}

console.log(`\nBebeto será mais alto que Romário em ${anos} ano(s).`);
console.log(`Altura de Bebeto: ${alturaBebeto.toFixed(2)} m`);
console.log(`Altura de Romário: ${alturaRomario.toFixed(2)} m`);
