
let salarioMinimo = 1293.20;
let salarioUsuario = parseFloat(prompt("Digite o valor do seu salário:"));

let quantidadeSalarios = salarioUsuario / salarioMinimo;

console.log("Você ganha", quantidadeSalarios.toFixed(2), "salários mínimos.");
