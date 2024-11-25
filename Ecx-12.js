
let valorProduto = parseFloat(prompt("Digite o valor do produto:"));
let formaPagamento = parseInt(prompt("Escolha a forma de pagamento (1 - À Vista em Dinheiro ou Pix, 2 - À Vista no Cartão, 3 - Parcelado em 2 vezes, 4 - Parcelado em 3 vezes ou mais):"));

let valorFinal;

switch (formaPagamento) {
    case 1:
        valorFinal = valorProduto * 0.85; // 15% de desconto
        break;
    case 2:
        valorFinal = valorProduto * 0.90; // 10% de desconto
        break;
    case 3:
        valorFinal = valorProduto; // Preço normal, sem juros
        break;
    case 4:
        valorFinal = valorProduto * 1.10; // 10% de juros
        break;
    default:
        console.log("Opção inválida.");
        break;
}

console.log("Valor final do produto: R$", valorFinal.toFixed(2));
