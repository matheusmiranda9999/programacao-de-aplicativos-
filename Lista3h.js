g// Importando a biblioteca prompt-sync
const prompt = require("prompt-sync")();

let totalClientes = 0;
let totalNegativos = 0;

console.log("=== Cadastro de Contas ===");

while (true) {
    let numeroConta = prompt("\nDigite o número da conta (0 para encerrar): ");

    // Encerrar se conta for 0
    if (numeroConta === "0") {
        break;
    }

    let saldo = parseFloat(prompt("Digite o saldo da conta: "));

    if (isNaN(saldo)) {
        console.log("Saldo inválido. Tente novamente.");
        continue;
    }

    totalClientes++;

    let status = saldo >= 0 ? "positivo" : "negativo";
    if (saldo < 0) totalNegativos++;

    console.log(`Conta: ${numeroConta} | Saldo: R$ ${saldo.toFixed(2)} | Situação: ${status}`);
}

// Cálculo do percentual
if (totalClientes === 0) {
    console.log("\nNenhum cliente foi registrado.");
} else {
    let percentualNegativo = (totalNegativos / totalClientes) * 100;
    console.log(`\nTotal de clientes: ${totalClientes}`);
    console.log(`Clientes com saldo negativo: ${totalNegativos}`);
    console.log(`Percentual de saldos negativos: ${percentualNegativo.toFixed(2)}%`);
}
