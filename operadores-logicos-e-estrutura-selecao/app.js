const readLine = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

console.log('Esse programa vai checar se você é maior de 18 e tem habilitação para saber se você pode entrar no kart');
console.log('Além da sua idade, preicsamos verificar se vc etá na lista de presença do horário');

readLine.question("Qual o ano do seu nascimento? ", ano => {
    if(ano > 2004){
        console.log('Você não tem 18 anos');
    }else{
        readLine.question('Você tem habilitação? (Sim/Não) ', temHabilitacao => {
            if(!(temHabilitacao.toUpperCase() === "SIM")){
                console.log('Você nao tem habilitação para entrar no kart');
            }else{
                readLine.question('Qual seu nome? ', nome =>{
                    switch(nome){
                        case 'Douglas' :
                            console.log('bem vindo ao Kart Douglas');
                            break;
                        case 'Rafael' :
                            console.log('bem vindo ao Kart Rafael');
                            break
                        default:
                            console.log('Seu nome não foi identificado na lista de presença');
                    }
                })
            }
        })
    }
})
