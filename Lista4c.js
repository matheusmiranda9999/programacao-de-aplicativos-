k// Importando a biblioteca prompt-sync
const prompt = require("prompt-sync")();

let nomes = [];
let notas = [];
const totalAlunos = 35;

console.log("Digite o nome e a nota dos 35 alunos:");

for (let i = 0; i < totalAlunos; i++) {
    let nome = prompt(`Nome do aluno ${i + 1}: `);
    let nota = parseFloat(prompt(`Nota do aluno ${i + 1}: `));

    while (isNaN(nota) || nota < 0 || nota > 10) {
        console.log("Nota inválida. Digite um valor entre 0 e 10.");
        nota = parseFloat(prompt(`Nota do aluno ${i + 1}: `));
    }

    nomes.push(nome);
    notas.push(nota);
}

// Relatório: nomes e notas >= 7.0
console.log("\n=== Alunos com nota igual ou superior a 7.0 ===");

let encontrouAprovados = false;

for (let i = 0; i < totalAlunos; i++) {
    if (notas[i] >= 7.0) {
        console.log(`Aluno: ${nomes[i]} | Nota: ${notas[i]}`);
        encontrouAprovados = true;
    }
}

if (!encontrouAprovados) {
    console.log("Nenhum aluno obteve nota igual ou superior a 7.0.");
}
