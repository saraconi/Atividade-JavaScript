
let alturaFrancisco = 1.50;
let alturaSara = 1.10;
let anos = 0;

while (alturaFrancisco <= alturaSara) {
    alturaFrancisco += 0.02; // Cresce 2 cm por ano
    alturaSara += 0.03; // Cresce 3 cm por ano
    anos++;
}

console.log("Será necessário " + anos + " anos para que Francisco seja maior que Sara.");
