// Importa a biblioteca prompt-sync
const prompt = require("prompt-sync")();

// Recebe as três notas do aluno
let nota1 = parseFloat(prompt("Digite a primeira nota (0 a 10): "));
let nota2 = parseFloat(prompt("Digite a segunda nota (0 a 10): "));
let nota3 = parseFloat(prompt("Digite a terceira nota (0 a 10): "));

// Calcula a média
let media = (nota1 + nota2 + nota3) / 3;

// Verifica se a média é maior ou igual a 7
if (media >= 7) {
    console.log("Aluno aprovado com média: " + media.toFixed(2));
} else {
    console.log("Aluno reprovado com média: " + media.toFixed(2));
}
