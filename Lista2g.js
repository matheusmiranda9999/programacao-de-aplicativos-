// Importa a biblioteca prompt-sync
const prompt = require("prompt-sync")();

// Solicita os dados do usuário
let nome = prompt("Digite seu nome: ").trim();
let idade = parseInt(prompt("Digite sua idade: "));
let email = prompt("Digite seu e-mail: ").trim();

// Valida os dados
let nomeValido = nome !== "";
let idadeValida = idade >= 18;
let emailValido = email.includes("@");

// Verifica se todos os dados estão válidos
if (nomeValido && idadeValida && emailValido) {
    console.log("Cadastro realizado com sucesso!");
} else {
    console.log("Preencha os dados corretamente.");
}
