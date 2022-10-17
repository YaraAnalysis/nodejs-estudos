const readLine = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

const validarNumeroInformado = (numero) => {
    const resultado = Number.parseFloat(numero);
    if(!resultado){
        console.log('Número informado não é valido');
    }
    return resultado
}

const validarOperador = (operador) => {
    switch(operador){
        case '+':
        case '-':
        case '/':
        case '*':
        case '%':
            return operador;
        default:
            console.log('operador informado é inválido');
            return null;
    }
}

readLine.question('Favor digitar um número: ', (numero1) => {
    const numeroValidado1 = validarNumeroInformado(numero1);

    if(numeroValidado1){
        readLine.question('Favor digitar outro número: ', (numero2) => {
            const numeroValidado2 = validarNumeroInformado(numero2);

            if(numeroValidado2){
                readLine.question('Favor informar o operador: ', (operador) => {
                    const operadorValidado = validarOperador(operador);
                    if(operadorValidado){
                        switch(operadorValidado){
                            case '+' : console.log(`Operador selecionado: adição. Resultado: ${numeroValidado1} + ${numeroValidado2} = ${numeroValidado1 + numeroValidado2}`)
                                break;
                            case '-' : console.log(`Operador selecionado: subtração. Resultado: ${numeroValidado1} - ${numeroValidado2} = ${numeroValidado1 - numeroValidado2}`)
                                break;
                            case '*' : console.log(`Operador selecionado: multiplicação. Resultado: ${numeroValidado1} * ${numeroValidado2} = ${numeroValidado1 * numeroValidado2}`)
                                break;
                            case '/' : console.log(`Operador selecionado: divisão. Resultado: ${numeroValidado1} / ${numeroValidado2} = ${numeroValidado1 / numeroValidado2}`)
                                break;
                            case '%' : console.log(`Operador selecionado: módulo. Resultado: ${numeroValidado1} % ${numeroValidado2} = ${numeroValidado1 % numeroValidado2}`)
                                break;
                            default: break;
                        }
                    }
                });
            }
        });
    }
})