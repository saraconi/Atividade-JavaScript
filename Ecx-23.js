
let valorHora = parseFloat(prompt("Digite o valor da hora aula:"));
let numAulas = parseInt(prompt("Digite o número de aulas lecionadas no mês:"));
let percentualINSS = parseFloat(prompt("Digite o percentual de desconto do INSS (em %):"));

let salarioBruto = valorHora * numAulas;
let descontoINSS = salarioBruto * (percentualINSS / 100);
let salarioLiquido = salarioBruto - descontoINSS;

console.log("Salário bruto: R$", salarioBruto.toFixed(2));
console.log("Desconto do INSS: R$", descontoINSS.toFixed(2));
console.log("Salário líquido: R$", salarioLiquido.toFixed(2));
