const readLine = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout,
});

console.log('-----------------------------------------')
console.log('Esse programa vai checar se você é maior de 18 anos e tem nabilitação, para saber se você pode entrar no kart.');
console.log('Além dessas verificações, precisamos checar se você está na lista de prsença do horário.')
console.log('-----------------------------------------')

readLine.question('Qual o ano do seu nascimento? ', ano => {
    if(ano > 2004){
        console.log('Você não tem 18 anos.');
        readLine.close();
    }else{
        readLine.question('Você tem habilitação? (Sim/Não) ', temHabilitacao => {
            if(!(temHabilitacao.toUpperCase() === 'SIM')){
                console.log('Você não tem habilitação para entrar no Kart.');
                readLine.close();
            }else{
                readLine.question('Qual o seu nome? ', nome => {
                    switch(nome){
                        case 'Douglas' :
                            console.log('Bem vindo ao Kart, Douglas.');
                            break;
                        case 'Rafael' :
                            console.log('Bem vindo ao Kart, Rafael.');
                            break;
                        default:
                            console.log('Seu nome não foi identificado na lista de presença.');
                    }
                readLine.close();
                });
            }
        })
    }
})