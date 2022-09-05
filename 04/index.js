let capital = 1000;
let taxaJuros = 12.5 / 100;
let tempoInvestido = 5;

const jurosComposto = capital * (1 + taxaJuros) ** tempoInvestido;

console.log(jurosComposto.toFixed(2));//