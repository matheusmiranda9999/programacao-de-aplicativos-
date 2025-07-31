j// Array inicial com 5 jogos
let jogos = ["FIFA", "Call of Duty", "Among Us", "League of Legends", "Valorant"];

console.log("Array inicial:", jogos);

// Adiciona um jogo no final
jogos.push("Fortnite");

// Substitui o segundo jogo (índice 1) por "Minecraft"
jogos[1] = "Minecraft";

// Remove o último jogo da lista
jogos.pop();

// Mostra o array final e seu tamanho
console.log("Array final:", jogos);
console.log("Tamanho do array:", jogos.length);
