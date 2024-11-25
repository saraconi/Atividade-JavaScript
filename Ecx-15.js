
let anoNascimento = parseInt(prompt("Digite o ano em que você nasceu:"));
let anoAtual = new Date().getFullYear();

let idadeAnos = anoAtual - anoNascimento;
let idadeMeses = idadeAnos * 12;
let idadeDias = idadeAnos * 365;

console.log("Idade: " + idadeAnos + " anos, " + idadeMeses + " meses, " + idadeDias + " dias.");
