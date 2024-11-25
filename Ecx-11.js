
let nome = prompt("Digite o nome do aluno:");
let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));
let nota4 = parseFloat(prompt("Digite a quarta nota:"));

let media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log("Nome do aluno:", nome);
console.log("Média final:", media.toFixed(2));

if (media >= 7) {
    console.log("Aluno aprovado.");
} else {
    console.log("Aluno reprovado.");
}
