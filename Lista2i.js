// Importa a biblioteca prompt-sync
const prompt = require("prompt-sync")();

// Recebe os dados do usuário
let anosFumando = parseInt(prompt("Digite o número de anos que você fuma: "));
let cigarrosPorDia = parseInt(prompt("Digite o número de cigarros fumados por dia: "));
let precoCarteira = parseFloat(prompt("Digite o preço da carteira com 20 cigarros (R$): "));

// Calcula o total de cigarros fumados no período
let totalDias = anosFumando * 365;
let totalCigarros = totalDias * cigarrosPorDia;

// Calcula o custo total
// Custo por cigarro = preço da carteira / 20
let custoPorCigarro = precoCarteira / 20;
let gastoTotal = totalCigarros * custoPorCigarro;

// Exibe o resultado
console.log(`Você já gastou R$ ${gastoTotal.toFixed(2)} fumando.`);

if (gastoTotal > 10000) {
    console.log("Você já gastou muito");
}
