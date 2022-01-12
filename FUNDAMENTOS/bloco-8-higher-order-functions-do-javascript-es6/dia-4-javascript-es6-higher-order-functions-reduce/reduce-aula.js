const numeros = [2, 3, 4];

const funcaoReducer = (acumulador, valorCorrente, index, array) => {
    console.log('Acumulador antes ', acumulador);
    console.log('Valor Corrente ', valorCorrente);
    //console.log('Index ', index);
    //console.log('Array ', array);
    //console.log('------------------');
    if(valorCorrente % 2 !== 0){
        acumulador = 'impar';
        console.log('Acumulador dentro ', acumulador);
        console.log('------------------')
        return acumulador;
    }
    acumulador = 'par'
    console.log('Acumulador depois ', acumulador);
    console.log('------------------')
    return acumulador;
};

const resultado = numeros.reduce(funcaoReducer, 'par');
console.log('O valor do reduce é: ', resultado);





const numeros = [2, 3, 4];

const funcaoReducer = (acumulador, valorCorrente, index, array) => {
    console.log('Acumulador ', acumulador);
    console.log('Valor Corrente ', valorCorrente);
    console.log('Index ', index);
    console.log('Array ', array);
    console.log('------------------');
    return acumulador;
};

const resultado = numeros.reduce(funcaoReducer, 0);
console.log('O valor do reduce é: ', resultado);










const numeros = [2, 3, 4];

const funcaoReducer = (acumulador, valorCorrente, index, array) => {
    console.log('Acumulador antes ', acumulador);
    console.log('Valor Corrente ', valorCorrente);
    //console.log('Index ', index);
    //console.log('Array ', array);
    //console.log('------------------');
    if(valorCorrente % 2 !== 0){
        acumulador = false;
        console.log('Acumulador dentro ', acumulador);
        console.log('------------------')
        return acumulador;
    }
    acumulador = true;
    console.log('Acumulador depois ', acumulador);
    console.log('------------------')
    return acumulador;
};

const resultado = numeros.reduce(funcaoReducer, true);
console.log('O valor do reduce é: ', resultado);





const numeros = [2, 3, 4];

const funcaoReducer = (acumulador, valorCorrente, index, array) => {
    console.log('Acumulador antes ', acumulador);
    console.log('Valor Corrente ', valorCorrente);
    //console.log('Index ', index);
    //console.log('Array ', array);
    //console.log('------------------');
    if(valorCorrente % 2 !== 0){
        acumulador.push(valorCorrente);
        console.log('Acumulador dentro ', acumulador);
        console.log('------------------')
        return acumulador;
    }
    //acumulador = true;
    console.log('Acumulador depois ', acumulador);
    console.log('------------------')
    return acumulador;
};

const resultado = numeros.reduce(funcaoReducer, []);
console.log('O valor do reduce é: ', resultado);






const numeros = [2, 3, 4];

const funcaoReducer = (acumulador, valorCorrente, index, array) => {
    console.log('Acumulador antes ', acumulador);
    console.log('Valor Corrente ', valorCorrente);
    //console.log('Index ', index);
    //console.log('Array ', array);
    //console.log('------------------');
    if(valorCorrente % 2 !== 0){
        acumulador[`${valorCorrente}`]= valorCorrente;
        console.log('Acumulador dentro ', acumulador);
        console.log('------------------')
        return acumulador;
    }
    //acumulador = true;
    console.log('Acumulador depois ', acumulador);
    console.log('------------------')
    return acumulador;
};

const resultado = numeros.reduce(funcaoReducer, {});
console.log('O valor do reduce é: ', resultado);