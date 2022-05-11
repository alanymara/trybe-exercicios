const readLine = require('readline-sync');

const calculaArea = () => {
  const lado = readLine.questionInt("Digite o valor do lado: ")
  return lado * lado;
}

module.exports = calculaArea;