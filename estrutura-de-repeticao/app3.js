const listaArgumentos = process.argv.slice(2);

console.log(' ')
console.log('--------------------------Executando um FOR--------------------------');
for(let controladorFor = 0; controladorFor < listaArgumentos.length; controladorFor++){
    console.log(`Posição ${controladorFor} - Valor lido: ${listaArgumentos[controladorFor]}`);
}

console.log(' ')
console.log('--------------------------Executando um WHILE--------------------------');
let controladorWhile = 0;
while(controladorWhile < listaArgumentos.length){
    console.log(`Posição ${controladorWhile} - Valor lido: ${listaArgumentos[controladorWhile]}`);
    controladorWhile++;
}

console.log(' ')
console.log('--------------------------Executando um DO WHILE--------------------------');
let controladoDoWhile = 0;
do{
    console.log(`Posição ${controladoDoWhile} - Valor lido: ${listaArgumentos[controladoDoWhile]}`);
    controladoDoWhile++;
}while(controladoDoWhile < listaArgumentos.length)

console.log(' ')
console.log('--------------------------Executando um FOR OF--------------------------');
let controladorForOf = 0;
for(const argumento of listaArgumentos){
    console.log(`Posição ${controladorForOf} - Valor lido: ${argumento}`);
    controladorForOf++;
}