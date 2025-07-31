// Importando a biblioteca prompt-sync (mesmo que não precise neste exercício, incluí para manter o padrão)
const prompt = require("prompt-sync")();

// Tabuadas de 2 a 9
for (let i = 2; i <= 9; i++) {
    console.log(`\nTabuada do ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}
