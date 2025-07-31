// Importa a biblioteca prompt-sync
const prompt = require("prompt-sync")();

// Não é necessário entrada do usuário neste exercício

let soma = 0;

// Percorre os números entre 11 e 29 (ímpares entre 10 e 30)
for (let i = 11; i < 30; i += 2) {
    soma += i;
}

console.log("A soma dos números ímpares entre 10 e 30 é: " + soma);
