
let peso = parseFloat(prompt("Digite o seu peso (em kg):"));
let altura = parseFloat(prompt("Digite a sua altura (em metros):"));

let imc = peso / (altura * altura); // Fórmula do IMC

let condicao;
if (imc < 18.5) {
    condicao = "Abaixo do peso";
} else if (imc >= 18.6 && imc <= 24.9) {
    condicao = "Peso ideal (parabéns)";
} else if (imc >= 25.0 && imc <= 29.9) {
    condicao = "Levemente acima do peso";
} else if (imc >= 30.0 && imc <= 34.9) {
    condicao = "Obesidade grau I";
} else if (imc >= 35.0 && imc <= 39.9) {
    condicao = "Obesidade grau II (severa)";
} else {
    condicao = "Obesidade grau III (mórbida)";
}

console.log("Seu IMC é:", imc.toFixed(2));
console.log("Condição de IMC:", condicao);
