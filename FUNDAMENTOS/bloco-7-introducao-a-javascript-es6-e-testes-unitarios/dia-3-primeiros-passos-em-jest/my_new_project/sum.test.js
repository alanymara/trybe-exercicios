//Para testar sua instalação, crie um arquivo chamado sum.test.js e colar o código abaixo dentro dele:
//Depois disso, vamos até o terminal digitar npm test , se você receber uma resposta parecida com a resposta abaixo, tudo certo com a instalação!
/*const sum = (a, b) => a + b;

// sum.js
test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});*/

/*Neste exemplo, tanto a implementação quanto os testes da função estão no mesmo arquivo. 
Na prática, porém, eles ficarão separados. Jest procura por arquivos com as 
extensões .js , .jsx , .ts e .tsx dentro de uma pasta com o nome __tests__ , 
ou arquivos com o sufixo .test ou .spec . É comum que o arquivo de teste tenha o 
mesmo nome e fique na mesma pasta do arquivo que está sendo testado, acrescido 
da sufixo .test.js :*/

const sum = require('./sum');

test('sums two values', () => {
  expect(sum(2, 3)).toBe(5);
});