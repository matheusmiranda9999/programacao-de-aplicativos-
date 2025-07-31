)// Importando a biblioteca prompt-sync
const prompt = require("prompt-sync")();

let countFemininoMaior21 = 0;

for (let i = 1; i <= 200; i++) {
    console.log(`\nEstudante ${i}:`);

    let nome = prompt("Nome: ");
    
    let idade = parseInt(prompt("Idade: "));
    while (isNaN(idade) || idade < 0) {
        console.log("Idade inválida. Digite novamente.");
        idade = parseInt(prompt("Idade: "));
    }

    let sexo = prompt("Sexo (M/F): ").toUpperCase();
    while (sexo !== 'M' && sexo !== 'F') {
        console.log("Sexo inválido. Digite 'M' ou 'F'.");
        sexo = prompt("Sexo (M/F): ").toUpperCase();
    }

    if (sexo === 'F' && idade > 21) {
        countFemininoMaior21++;
    }
}

console.log(`\nNúmero de estudantes do sexo feminino e maior de 21 anos: ${countFemininoMaior21}`);
