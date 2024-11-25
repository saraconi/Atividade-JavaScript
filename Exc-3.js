
let A = parseInt(prompt("Digite o valor de A:"));
let B = parseInt(prompt("Digite o valor de B:"));
let C;

if (A === B) {
    C = A + B;
    console.log("Os valores são iguais. A soma é:", C);
} else {
    C = A * B;
    console.log("Os valores são diferentes. O produto é:", C);
}
