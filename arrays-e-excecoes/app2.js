const notas = [90, 71, 82, 93, 75, 82];

const notasAcima80 = notas.filter(n => n>80).length;

console.log(notasAcima80, 'notas acima de 80.');