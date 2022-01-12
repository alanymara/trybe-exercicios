const numeros = [3, 4, 5, 6, 7, 8];

const funcaoReducer = (acumulador, valorCorrente) => {
    if (valorCorrente > acumulador) {
        acumulador = valorCorrente;
    }
    return acumulador;
};

const maiorNumero = numeros.reduce(funcaoReducer);

console.log('O maior valor é: ', maiorNumero);