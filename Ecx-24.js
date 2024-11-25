
let tempoViagem = parseFloat(prompt("Digite o tempo da viagem (em horas):"));
let velocidadeMedia = parseFloat(prompt("Digite a velocidade média (em km/h):"));
let distanciaPercorrida = tempoViagem * velocidadeMedia;

let litrosConsumidos = distanciaPercorrida / 12; // Carro faz 12 km por litro

console.log("Distância percorrida: " + distanciaPercorrida + " km");
console.log("Quantidade de litros de combustível utilizados: " + litrosConsumidos.toFixed(2) + " litros");
