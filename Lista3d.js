h// Importando a biblioteca prompt-sync
const prompt = require("prompt-sync")();

// Solicitando a quantidade de pessoas no grupo
const quantidade = parseInt(prompt("Digite o número de pessoas no grupo: "));

// Validando entrada
if (isNaN(quantidade) || quantidade <= 0) {
    console.log("Número inválido. Encerrando o programa.");
    process.exit(); // Encerra o programa
}

// Inicializando variáveis para mais velho e mais novo
let nomeMaisVelho = "";
let idadeMaisVelho = -Infinity;

let nomeMaisJovem = "";
let idadeMaisJovem = Infinity;

// Loop para coletar os dados
for (let i = 1; i <= quantidade; i++) {
    console.log(`\nPessoa ${i}:`);
    let nome = prompt("Digite o nome: ");
    let idade = parseInt(prompt("Digite a idade: "));

    // Validação básica
    if (isNaN(idade) || idade < 0) {
        console.log("Idade inválida. Tente novamente.");
        i--;
        continue;
    }

    // Verifica mais velho
    if (idade > idadeMaisVelho) {
        idadeMaisVelho = idade;
        nomeMaisVelho = nome;
    }

    // Verifica mais jovem
    if (idade < idadeMaisJovem) {
        idadeMaisJovem = idade;
        nomeMaisJovem = nome;
    }
}

// Exibe resultados
console.log(`\nPessoa mais idosa: ${nomeMaisVelho} (${idadeMaisVelho} anos)`);
console.log(`Pessoa mais jovem: ${nomeMaisJovem} (${idadeMaisJovem} anos)`);
