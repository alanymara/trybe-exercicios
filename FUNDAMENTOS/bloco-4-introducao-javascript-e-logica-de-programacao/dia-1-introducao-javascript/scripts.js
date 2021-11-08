const a = 10;
const b = 4;
const c = 25;
const d = -8;

//1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. 
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a - b);
console.log(a % b);

//2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
if (a > b) {
    console.log(a);
} else {
    console.log(b);
}

//3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
if (a > b && a > c) {
    console.log(a);
} else if (b > a && b > c) {
    console.log(b);
} else {
    console.log(c);
}

//4. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
if (d >= 1) {
    console.log("positive");
} else if (d < 0) {
    console.log("negative");
} else {
    console.log("zero");
}

//5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
const ang1 = 50;
const ang2 = 50;
const ang3 = 80;

if (ang1 > 0 && ang2 > 0 && ang3 > 0 && ang1 + ang2 + ang3 == 180) {
    console.log("true");
} else {
    console.log("Erro, ângulo inválido");
}

// 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
let pecaXadrez = "Cavalo";
switch (pecaXadrez) {
    case "Rainha":
        console.log("A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.");
        break;
    case "Rei":
        console.log("O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.");
        break;
    case "Bispo":
        console.log("O bispo move-se ao longo da diagonal. Não pode pular outras peças.");
        break;
    case "Cavalo":
        console.log("É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.");
        break;
    case "Torre":
        console.log("A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.");
        break;
    case "Peão":
        console.log("O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.");
        break;               
}
//7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.
let nota = 100;

if (nota >= 90 && nota <= 100) {
    console.log("A");
} else if (nota >= 80 && nota <= 89) {
    console.log("B");
} else if (nota >= 70 && nota <= 79) {
    console.log("C");
} else if (nota >= 60 && nota <= 69) {
    console.log("D");
} else if (nota >= 50 && nota <= 59) {
    console.log("E");
} else if (nota < 50 && nota >= 0) {
    console.log("F");
} else {
    console.log("Erro, numero informado não está no intervalo de 0 a 100");
}

//8. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
const num1 = 5;
const num2 = 1;
const num3 = 2;

if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
    console.log("true");
} else{
    console.log("false");
}

//9. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
const num4 = 2;
const num5 = 2;
const num6 = 5;

if (num4 % 2 !== 0 || num5 % 2 !== 0 || num6 % 2 !== 0) {
    console.log("true");
} else{
    console.log("false");
}

//10. Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
const custo = 10;
const valorVenda = 50;
let valorCustoTotal;
let lucro;

if (custo <= 0 || valorVenda <= 0) {
    console.log("Erro, valores informados não podem ser igual ou menor que zero.")   
} else {
    valorCustoTotal = (custo + (custo * 0.20));
    lucro = valorVenda - valorCustoTotal;
    console.log(lucro * 1000);
}

//11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

let salarioBruto = 3000;
let salarioBase = 0;
let salarioLiquido = 0;
let aliquota = 0;
let ir = 0;
let inss = 0;
let parcelaIr = 0;

if (salarioBruto <= 1556.94){
    aliquota = 0.08;
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
    aliquota = 0.09;
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
    aliquota = 0.11;
} else if (salarioBruto > 5189.82) {
    aliquota = 570.88;
}

inss = salarioBruto * aliquota;
salarioBase = salarioBruto - inss;

if (salarioBase <= 1903.98) {
    ir = 0;
    parcelaIr = 0;
} else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
    parcelaIr = 142.80;
    ir = 0.075;
} else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
    parcelaIr = 354.80;
    ir = 0.15;
} else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
    parcelaIr = 636.13;
    ir = 0.225;
} else if (salarioBase > 4664.68) {
    parcelaIr = 869.36;
    ir = 0.275;
}

ir = (salarioBase * ir) - parcelaIr;
salarioLiquido = salarioBase - ir;
console.log(salarioLiquido);