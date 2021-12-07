//Testes de Arrow Functions (Funções Anônimas)
//Tests about Arrow Functions

// Etapa 1 - Sintaxe da arrow function
const printName = () => {
    const myName = "Lucas";
    return myName;
}
    console.log(printName());

  /* Etapa 2 - Quando não há nada no corpo da função além do que será retornado, 
  a sintaxe da arrow function nos permite simplificar ainda mais a função 
  printName omitindo o return e as chaves:*/
const printName = () => "Lucas";
    console.log(printName());

  /* Etapa 3 - Mas lembre-se que podemos omitir os parênteses apenas em um cenário:
Quando a função recebe apenas um argumento, como podemos ver no exemplo abaixo:*/
const multiplyByTwo = number => number * 2;
    console.log(multiplyByTwo(10));

  /* Etapa 4 - Em funções que recebem mais de um parâmetro, os parênteses não são omitidos:*/
const multiplication = (number, multi) => number * multi;
    console.log(multiplication(8, 2));