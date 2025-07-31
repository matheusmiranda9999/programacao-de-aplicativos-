k// Importando a biblioteca prompt-sync
const prompt = require("prompt-sync")();

let notas = [];
const totalAlunos = 35;

console.log("Digite as notas dos 35 alunos:");

for (let i = 0; i < totalAlunos; i++) {
    let nota = parseFloat(prompt(`Nota do aluno ${i + 1}: `));

    while (isNaN(nota) || nota < 0 || nota > 100) {
        console.log("Nota inválida. Digite um valor entre 0 e 100.");
        nota = parseFloat(prompt(`Nota do aluno ${i + 1}: `));
    }

    notas.push(nota);
}

// Relatório: notas maiores ou iguais a 70
console.log("\n=== Relatório de notas maiores ou iguais a 70.0 ===");

let aprovados = notas.filter(nota => nota >= 70.0);

if (aprovados.length === 0) {
    console.log("Nenhum aluno obteve nota igual ou superior a 70.0.");
} else {
    aprovados.forEach((nota, index) => {
        console.log(`Aluno ${index + 1}: Nota = ${nota}`);
    });
    console.log(`\nTotal de alunos com nota >= 70.0: ${aprovados.length}`);
}
