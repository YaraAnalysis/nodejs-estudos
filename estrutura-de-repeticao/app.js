const listaArgumentos = process.argv.slice(2);

console.log('--------------- Executanto um FOR ---------------');
for(let controladorFor = 0; controladorFor < listaArgumentos.length; controladorFor++){
    console.log(`Posicao ${controladorFor} valor lido = ${listaArgumentos[controladorFor]}`);
}

console.log('--------------- Executanto um WHILE ---------------');
let controladorWhile = 0;
while(controladorWhile < listaArgumentos.length){
    console.log(`Posicao ${controladorWhile} valor lido = ${listaArgumentos[controladorWhile]}`);
    controladorWhile++
}


console.log('--------------- Executanto um DOWHILE ---------------');
let controladoDoWhile = 0;
do{
    console.log(`Posicao ${controladoDoWhile} vlor lido = ${listaArgumentos[controladoDoWhile]}`);
    controladoDoWhile++;
}while(controladoDoWhile < listaArgumentos.length)

console.log('--------------- Executanto um FOR OF ---------------');
let controladorForOf = 0;
for(const argumento of listaArgumentos){
    console.log(`Posição ${controladorForOf} valor lido = ${argumento}`);
    controladorForOf++;
}