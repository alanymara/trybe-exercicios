const { expect } = require('chai');
const calculaArea = require('../calculaArea');

describe('Executa script calculaArea', () => { //Mocha

  describe('quando o valor informado for maior ou igual a zero', () => {

    describe('a resposta', () => {

      it('é um "number"', () => {
        sinon.stub(readLine, 'questionInt').returns(10);
        const resposta = calculaArea();
        expect(resposta).to.be.a('number');
      })

      it('é igual a "100" quando o lado for "10"', () => {
        const resposta = calculaArea();
        expect(resposta).to.be.equals(100);
      })
    });
  });

  describe('quando o valor informado for negativo', () => {
    it('Deve estourar um erro com a mensagem "Valor Inválido"', () => {
      expect(calculaArea).to.throw('Valor inválido'); // ou expect(() => calculaArea(10)).to.throw('Valor inválido');
    })
  })
});