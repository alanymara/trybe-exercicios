const readline = require('readline-sync');

const calculatorIMC = (peso, altura) => {
    const alturaEmMetros = altura / 100;
    const alturaResultado = alturaEmMetros ** 2;

    const imcResultado = peso / alturaResultado;

    return imcResultado;
}

const IMC_MAXIMO_E_MINIMO_POR_SITUACAO = {
  'Abaixo do peso (magreza)': {
    imcMaximo: 18.5,
  },
  'Peso normal': {
    imcMinimo: 18.5,
    imcMaximo: 25,
  },
  'Acima do peso (sobrepeso)': {
    imcMinimo: 18.5,
    imcMaximo: 25,
  },
  'Obesidade grau I': {
    imcMinimo: 18.5,
    imcMaximo: 25,
  },
  'Obesidade grau II': {
    imcMinimo: 18.5,
    imcMaximo: 25,
  },
  'Obesidade graus III e IV': {
    imcMinimo: 40,
  },
};

function calculaSituacao(imc) {
  const situacoes = Object.keys(IMC_MAXIMO_E_MINIMO_POR_SITUACAO);

  const situacaoEncontrada = situacoes.find((situacao) => {
    const { imcMaximo, imcMinimo } = IMC_MAXIMO_E_MINIMO_POR_SITUACAO[situacao];

    const dentroDoMinimo = imcMinimo ? imc > imcMinimo : true; 
    const dentroDoMaximo = imcMaximo ? imc < imcMaximo : true;

    return dentroDoMaximo && dentroDoMinimo;
  });

  return situacaoEncontrada;
}

const main = () => {
  const peso = readline.questionFloat('Qual o seu peso? (em kg)');
  const altura = readline.questionInt('Qual sua altura? ');
  const imc = calculatorIMC(peso, altura);
  const situacao = calculaSituacao(imc);
  console.log(`IMC: ${imc.toFixed(2)}`);
  console.log(`Situação: ${situacao}`);
}

main();