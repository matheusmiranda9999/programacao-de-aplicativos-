const prompt = require("prompt-sync")();
1et numeroA = Number(prompt("digite um numero"));
1et numeroB =Number(prompt("digite um numero"));

console.log("soma:", numeroA + numeroB);
console.log("subtracao:", numeroA - numeroB);
console.log("multiplicacao:", numeroA * numeroB);
if (numeroA===0)
console.log("divisao; impossivel dividir por 0.");
{else}
let divisao = numeroA/numeroB;
console.log("divisao",divisao);

{
console.log("resto da divisao",numeroA % numeroB);




