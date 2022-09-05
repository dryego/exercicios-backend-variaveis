let emprestimo = 60000;
let valorApagar = 90000;
let tempo = 24;

let taxaJuros = (valorApagar / emprestimo) ** (1 / tempo) - 1;
taxaJuros = taxaJuros * 100;

console.log(`O seu financiamento de R$${emprestimo.toLocaleString('pt-br', { minimumFractionDigits: 2 })} reais teve uma taxa de juros de ${taxaJuros.toFixed(3)}%, pois após ${tempo} meses você teve que pagar R$${valorApagar.toLocaleString('pt-br', { minimumFractionDigits: 2 })} reais.`);//