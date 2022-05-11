const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const index = require('./index.js');

expectResults = {
  negativo: 'negativo',
  positivo: 'positivo',
  neutro: 'neutro',
  notnumber: 'o valor deve ser um número',
  arquivo: './arquivo.txt',
  ok: 'ok'
}

describe('Testes do arquivo "index"', () => {
  describe('Teste da função validacaoNumerosNaturais', () => {
    it('retorno esperado "negativo"', () => {
      const resultado = index.validacaoNumerosNaturais(-7);
      expect(resultado).to.be.a('string');
      expect(resultado).to.be.equals(expectResults.negativo);
    });
    it('retorno esperado "positivo"', () => {
      const resultado = index.validacaoNumerosNaturais(8);
      expect(resultado).to.be.a('string');
      expect(resultado).to.be.equals(expectResults.positivo);
    });
    it('retorno esperado "neutro"', () => {
      const resultado = index.validacaoNumerosNaturais(0);
      expect(resultado).to.be.a('string');
      expect(resultado).to.be.equals(expectResults.neutro);
    });
    it('retorno esperado "notnumber"', () => {
      const resultado = index.validacaoNumerosNaturais('joaozinho');
      expect(resultado).to.be.a('string');
      expect(resultado).to.be.equals(expectResults.notnumber);
    });
  });
  describe('Teste da função escreverArquivo', () => {
    before(() => {
      sinon.stub(fs, 'writeFileSync');
    })
    after(() => {
      fs.writeFileSync.restore();
    })

    it('retorno esperado será "ok"', () => {
      const resultado = index.escreverArquivo(expectResults.arquivo, 
        expectResults.notnumber);
      expect(resultado).to.be.a('string');
      expect(resultado).to.be.equals(expectResults.ok);
    });
  });
  describe('Teste da função lerArquivo', () => {
    before(() => {
      sinon.stub(fs, 'readFileSync').returns(expectResults.notnumber);
    })
    after(() => {
      fs.readFileSync.restore();
    })

    it('retorno esperado será "o valor deve ser um número"', () => {
      const resultado = index.lerArquivo(expectResults.arquivo);
      expect(resultado).to.be.a('string');
      expect(resultado).to.be.equals(expectResults.notnumber);
    });
  });
});