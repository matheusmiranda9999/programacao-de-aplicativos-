// Importa a biblioteca prompt-sync
const prompt = require("prompt-sync")();

// Solicita a idade e o sexo da pessoa
let idade = parseInt(prompt("Digite sua idade: "));
let sexo = prompt("Digite seu sexo (M para masculino, F para feminino): ").toUpperCase();

// Verifica se o alistamento é obrigatório
if (sexo === "M" && idade === 18) {
    console.log("O alistamento militar é obrigatório este ano.");
} else if (sexo === "M" && idade < 18) {
    console.log("Você ainda não tem idade para o alistamento militar obrigatório.");
} else if (sexo === "M" && idade > 18) {
    console.log("Você já passou da idade de alistamento obrigatório.");
} else if (sexo === "F") {
    console.log("O alistamento militar não é obrigatório para mulheres.");
} else {
    console.log("Sexo informado inválido.");
}
