/* O reduce possui uma outra diferença: você pode passar um segundo parâmetro para o reduce, logo após a função . 
Veja a seguir, será usado o último exemplo dado da soma dos números: */

const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 32 47 50 52 47 103
  return result + number;
};

const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113

//Com a alteração

const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 0 32 47 50 52 47 103
  return result + number;
  };
const sumNumbers = numbers.reduce(getSum, 0); // Parâmetro adicionado ao reduce: o "0"
console.log(sumNumbers); // 113


//Outros exemplos

const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 10 42 57 60 62 57 113
  return result + number;
  };
const sumNumbers = numbers.reduce(getSum, 10);
console.log(sumNumbers); // 123

// Para fixar: Serão comparados valores para buscar o maior valor em um array.
const numbers = [50, 85, -30, 3, 15];

const getBigger = (comparacao, numero) => ((comparacao > numero) ? comparacao: numero);

const bigger = numbers.reduce(getBigger, 0);
console.log(bigger);

//Some todos os números pares do array:
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
const getPairs = (comparacao, numero) => (numero % 2 ===0 ? (comparacao + numero) : comparacao);

const somaPares = numbers.reduce(getPairs, 0);
console.log(somaPares);

//Solução usando filter e reduce :
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getEven = (number) => number % 2 === 0;
const sumPair = (currentValue, number) => currentValue + number;

const sumNumbers = (array) => array.filter(getEven).reduce(sumPair); // Olhe que código pequeno e conciso!

console.log(sumNumbers(numbers)); // 152