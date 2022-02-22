const numeros = [3, 4, 5, 6, 7, 8];

const funcaoReducer = (acumulador, valorCorrente, index) => {
    console.log('Acumulador antes ', acumulador);
    console.log('Valor Corrente ', valorCorrente);
    console.log('Index ', index);
    acumulador += valorCorrente
    console.log('Acumulador depois ', acumulador);
    console.log('------------------');
    return acumulador;
}

const somaComReduce = numeros.reduce(funcaoReducer);

console.log('Esse é o valor da soma do reduce ', somaComReduce);