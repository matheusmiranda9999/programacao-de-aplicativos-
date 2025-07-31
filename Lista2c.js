// Importa a biblioteca prompt-sync
const prompt = require("prompt-sync")();

// Solicita a idade da pessoa
let idade = parseInt(prompt("Digite sua idade: "));

// Classifica conforme a idade
if (idade <= 12) {
    console.log("Criança");
} else if (idade >= 13 && idade <= 17) {
    console.log("Adolescente");
} else if (idade >= 18 && idade <= 64) {
    console.log("Adulto");
} else if (idade >= 65) {
    console.log("Idoso");
} else {
    console.log("Idade inválida");
}
