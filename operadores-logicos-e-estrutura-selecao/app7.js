// switch - verifica se algum dos casos informados é verdadeiro. Caso seja, executa o trecho de código isolado.
// Caso nenhum caso seja atendido, executa o treco default.

const nome = 'Douglas';

switch(nome) {
    case "João":
        console.log("João encontrado.");
        break;
    case "Douglas":
        console.log("Douglas encontrado.");
        break;
    default:
        console.log("Nenhum encontrado.");
}