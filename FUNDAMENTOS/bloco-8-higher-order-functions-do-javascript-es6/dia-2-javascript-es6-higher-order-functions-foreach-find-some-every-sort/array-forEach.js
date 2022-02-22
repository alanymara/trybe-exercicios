/* forEach é uma função de objeto do tipo array, serve para executar um bloco de 
códigos para cada elemento presente no array.*/

let listaDePessoasAprovados = [
    'alanymarasilva@example.com',
    'liamarasilva@example.com',
    'ritasilva@example.com',
    'raphaelheitor@example.com',
];

const enviarEmail = (email) => {
    console.log(`Email para ${email} foi enviado com sucesso`);
};

listaDePessoasAprovados.forEach((item, posicao, array) => {
    enviarEmail(item);
    console.log(`Sua posição é a de: ${posicao}`);
    console.log(`A quantidade de pessoas no processo seletivo é: ${array.length}`);
})

/* Saída:
    Email para alanymarasilva@example.com foi enviado com sucesso
    Sua posição é a de: 0
    A quantidade de pessoas no processo seletivo é: 4

    Email para liamarasilva@example.com foi enviado com sucesso
    Sua posição é a de: 1
    A quantidade de pessoas no processo seletivo é: 4

    Email para ritasilva@example.com foi enviado com sucesso
    Sua posição é a de: 2
    A quantidade de pessoas no processo seletivo é: 4

    Email para raphaelheitor@example.com foi enviado com sucesso
    Sua posição é a de: 3
    A quantidade de pessoas no processo seletivo é: 4 */