let diametro = 6;
let altura = 1;

const raio = diametro / 2; //raio

const alturaTotal = (2 * Math.PI * raio) * (raio + altura);

console.log(`${alturaTotal.toFixed()}pi`);//