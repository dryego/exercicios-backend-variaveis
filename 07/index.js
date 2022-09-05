let populacao = 1000;
let transmicao = 4;
let tempo = 8;

const infectados = (populacao * (transmicao ** (tempo / 7)));

console.log(`Após ${tempo} dias, avera ${infectados.toFixed(2)} pessoas infectados. O numero inicial de pessoas infequitadas eram ${populacao} pessoas.`);//