const nomeDoArray = [1, 2, 3, 4, 5];

//Declarando a funcao callback
/* function funcaoParametro(elemento, index, array) {
    console.log(elemento);
};

const funcaoParametro = (elemento, index, array) => {
    console.log(elemento);
}
const funcaoParametro = (elemento) => console.log(elemento);
 */

//Acessando HOF do array
//nomeDoArray.nomeDaHof(funcaoParametro);

const loopComFor = (arr) => {
    for (let index = 0; index < arr.length; index+=1) {
        console.log('elemento com for', arr[index]);
        console.log('index com for', index);
        console.log('array com for', arr);
    }
};
//loopComFor(nomeDoArray);

//Com forEach (Não tem retorno)
const loopComForeach = (arr) => {
    arr.forEach((elemento, index, array) => {
        console.log('elemento com forEach', elemento);
        console.log('index com forEach', index);
        console.log('array com forEach', array);
    })
}
loopComForeach(nomeDoArray);

//Com Every
const retornoEvery = nomeDoArray.every((elemento) => elemento % 2 === 0 );
console.log('retorno do every', retornoEvery);
//O Every checa todos os elementos do array, se algum nao estiver na condição, ele retorna false.


//Com Some
const retornoSome = nomeDoArray.some((elemento) => elemento % 2 === 0 );
console.log('retorno do some', retornoSome);
//O Some checa todos os elementos do array, se algum estiver na condição, ele retorna true.

//Com Find
const retornoFind = nomeDoArray.find((elemento) => elemento % 2 === 0 );
console.log('retorno do find', retornoFind);
//O Find checa até encontrar o 1º elemento que esteja na condição

//Com Sort
const letras = ['a', 'f', 'b'];
console.log('letras antes do sort ', letras);
const letrasOrdenadas = letras.sort();
console.log('letras depois do sort', letras);
console.log('letras ordenadas', letrasOrdenadas);
// Sort ordena até o array original

//Com numeros ele ordena de acordo com uma tabela específica
console.log('nome do array antes', nomeDoArray);
nomeDoArray.sort();
console.log('nome do array depois ', nomeDoArray);
