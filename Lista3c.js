// Importando a biblioteca prompt-sync
const prompt = require("prompt-sync")();

// Inicializando variáveis
let totalFolha = 0;
let quantidadeFuncionarios = 20;

for (let i = 1; i <= quantidadeFuncionarios; i++) {
    console.log(`\nFuncionário ${i}:`);

    let codigo = prompt("Digite o código do funcionário: ");
    let salario = parseFloat(prompt("Digite o salário do funcionário: "));

    // Validando entrada
    if (isNaN(salario) || salario < 0) {
        console.log("Salário inválido! Digite novamente.");
        i--; // repete o mesmo funcionário
        continue;
    }

    totalFolha += salario;
}

let mediaSalarial = totalFolha / quantidadeFuncionarios;

console.log(`\nTotal da folha de pagamento: R$ ${totalFolha.toFixed(2)}`);
console.log(`Média salarial da empresa: R$ ${mediaSalarial.toFixed(2)}`);
