//Exemplo de High Order Functions da aula
/* const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const multi = (num1, num2) => num1 * num2;
const div = (num1, num2) => num1 / num2;

const calculator = (func) => func(10, 5);

console.log(calculator(sum));
console.log(calculator(sub));
console.log(calculator(multi));
console.log(calculator(div)); */

// Para Fixar
/*  1 - Crie uma função que retorne a string 'Acordando!!' ;
    2 - Crie outra função que retorne a string 'Bora tomar café!!' ;
    3 - Crie mais uma função que retorne a string 'Partiu dormir!!' ;
    4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:
 */
const wakeUp = () => 'Acordando!!';
const haveBreackfast = () => 'Bora tomar café!!';
const goToSleep = () => 'Partiu dormir!!';

const doingThings = (callback) => {
    const result = callback();
    console.log(result);
}

doingThings(wakeUp);
doingThings(haveBreackfast);
doingThings(goToSleep);
