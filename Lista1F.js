// dividirConta.js
const prompt = require ("prompt-sync") ();
let valorTotal = parseFloat(prompt("Digite o valor
total da conta: R$ "));
let quantidadeClientes
= parseInt (prompt ("Digite a
quantidade de clientes: "));
if (quantidadeClientes > 0) {
let valorPorPessoa = valorTotal /
quantidadeClientes;
console. log( Cada cliente deverá pagar: R$
${valorPorPessoa. toFixed (2)}*);
} else {
console.log("A quantidade de clientes deve ser
maior que zero.");
｝
