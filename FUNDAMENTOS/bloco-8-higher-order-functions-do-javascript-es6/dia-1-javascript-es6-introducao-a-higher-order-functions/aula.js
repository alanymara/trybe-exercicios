// OBJETIVO: DEIXAR NÍTIDO QUE FUNÇÃO É UM TIPO COMO OUTRO QUALQUER.

const pi = 3.14159265359;
console.log(pi.toFixed(2));

const greetings = 'Hello, HOF!';
console.log(greetings.split(' '));

const isValid = true;
console.log(isValid.valueOf());

const person = {
    name: 'Alcione',
    age: 39,
};
console.log(Object.keys(person));

const names = ['Jose', 'Madalena', 'Epaminondas'];
names.pop();
console.log(names);
names.push('Hugo');
console.log(names);

const sayHello = () => console.log('Hello, Hof\'s!')
console.log(typeof sayHello);

sayHello.call(); // É o mesmo que
sayHello();

// Review

function multiplicar(fator1, fator2) {
let acumulador = 0;
for (let index = 0; index < fator2; index += 1) {
    acumulador += fator1;
    }
return acumulador
}

console.log(multiplicar.call(null, 4, 5));

// ENTENDER O QUE É UMA HOF
// ENTENDER POR QUE UMA HOF É ÚTIL
// ENTENDER COMO FAZER UMA HOF

let sociedade = [
    'Chaves',
    'Chiquinha',
    'Kiko',
    'Seu Madruga',
    'Bruxa do 71',
    'Seu Barriga',
    'Professor Girafales',
    'Pópis',
    'Nhonho',
    'Godines',
];

 function eliminarPessoasComecandoComS(pessoas) {
    const acumulador = [];
    for (let index = 0; index < pessoas.length; index += 1) {
        const nomeDaPessoa = pessoas[index];
        if (nomeDaPessoa[0] !== 'S') {
            acumulador.push(nomeDaPessoa);
        }
    }
    return acumulador
}

console.log('Antes de eliminar com S')
console.table(sociedade);

sociedade = eliminarPessoasComecandoComS(sociedade);
console.log('Depois de eliminar com S')
console.table(sociedade)


function eliminarPessoasComecandoCom(pessoas, primeiraLetra) {
    const acumulador = [];
    for (let index = 0; index < pessoas.length; index += 1) {
        const nomeDaPessoa = pessoas[index];
        if (nomeDaPessoa[0] !== primeiraLetra) {
            acumulador.push(nomeDaPessoa);
        }
    }
    return acumulador
}

console.log('Antes de eliminar com ')
console.table(sociedade);

sociedade = eliminarPessoasComecandoCom(sociedade);
console.log('Depois de eliminar com ')
console.table(sociedade);
