let a = 5;
let b = 5;
let c = 1;
const delta = Math.pow(b, 2) - ((4 * a) * c);

if (delta > 0) {
    raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
    raiz2 = (-b - Math.sqrt(delta)) / (2 * a);

    console.log(`Raiz 1 = ${raiz1}`);
    console.log(`Raiz 2 = ${raiz2}`);

} else {
    if (delta == 0) {
        raiz01 = (- b + Math.sqrt(delta)) / (2 * a);
        raiz02 = (- b - Math.sqrt(delta)) / (2 * a);

        console.log(`Raiz 1 = ${raiz01}`);
        console.log(`Raiz 2 = ${raiz02}`);

    } else {
        negativo = (-b) / (2 * 4);
        negativo1 = Math.sqrt(delta) / (2 * a);
        negativo2 = - Math.sqrt(delta) / (2 * a);

        console.log(`Raiz negativa = ${negativo}, ponto imaginario 1 = ${negativo1}`);
        console.log(`Raiz negativa = ${negativo}, ponto imaginario 1 = ${negativo2}`);//
    }
}