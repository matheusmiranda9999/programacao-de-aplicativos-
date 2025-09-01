const prompt = require('prompt-sync')();

function soma(num1, num2) {
    return num1 + num2;
}

function subtracao(num1, num2) {
    return num1 - num2;
}

function multiplicacao(num1, num2) {
    return num1 * num2;
}

function divisao(num1, num2) {
    if(num2 === 0) {
        console.log("Não é possível dividir por 0.");
        return null;
    }
    return num1 / num2;
}

for(let i = 1; i <= 2; i++){
    console.log('\nExecução: ');
    let a = Number(prompt("Digite o primeiro número: "));
    let b = Number(prompt("Digite o segundo número: "));

    console.log(`Soma: ${soma(a, b)}`);
    console.log(`Subtração: ${subtracao(a, b)}`);
    console.log(`Multiplicação: ${multiplicacao(a,b)}`);
    let resultadoDiv = divisao(a, b);
    if(resultadoDiv !== null){
        console.log(`Divisão: ${resultadoDiv}`);
    }
}
