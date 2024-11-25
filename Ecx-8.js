
let A = parseInt(prompt("Digite o primeiro valor:"));
let B = parseInt(prompt("Digite o segundo valor:"));
let C = parseInt(prompt("Digite o terceiro valor:"));

let valores = [A, B, C];
valores.sort((a, b) => b - a); // Ordena os valores em ordem decrescente

console.log("Os valores em ordem decrescente são:", valores);
