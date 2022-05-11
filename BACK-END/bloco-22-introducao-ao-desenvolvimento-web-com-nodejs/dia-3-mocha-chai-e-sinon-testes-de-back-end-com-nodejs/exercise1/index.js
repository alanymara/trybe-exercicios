const fs = require('fs');

function validacaoNumerosNaturais(entrada) {
  if(typeof entrada !== 'number') return 'o valor deve ser um número'
  else if(entrada > 0) return 'positivo'
  else if(entrada < 0) return 'negativo'
  else if(entrada == 0) return 'neutro';
}
function escreverArquivo(arquivo, dados){
  fs.writeFileSync(arquivo, dados)
  return 'ok';
}

function lerArquivo(arquivo){
  return String(fs.readFileSync(arquivo));
}

module.exports = { validacaoNumerosNaturais, escreverArquivo, lerArquivo };