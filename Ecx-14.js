
let A = parseInt(prompt("Digite o valor de A:"));
let B = parseInt(prompt("Digite o valor de B:"));

let temp = A;
A = B;
B = temp;

console.log("Novo valor de A:", A);
console.log("Novo valor de B:", B);
