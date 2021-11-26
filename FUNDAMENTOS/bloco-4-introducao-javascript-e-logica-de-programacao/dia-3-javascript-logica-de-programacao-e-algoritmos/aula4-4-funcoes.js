// Função é uma estrutura que guarda um conjunto de códigos

// FUNÇÃO SIMPLES

/*function calculaIPRF(){
    let resultado = (1000 / 2) *1000;
    return resultado
}
console.log('calculo IPRF: ', calculaIPRF())
*/
function calculaIPRF(salario, base){
    let resultado = (salario / base) * salario;
    return resultado
}
let recebeCalculo = calculaIPRF(500, 5)

console.log('calculo IPRF: ', recebeCalculo);