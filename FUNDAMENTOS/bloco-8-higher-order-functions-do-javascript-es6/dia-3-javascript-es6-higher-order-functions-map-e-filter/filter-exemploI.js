const enviarEmail = (pessoAprovada) => {
    const parte1 = `${pessoAprovada.email}: Parabéns ${pessoAprovada.nome}`;
    const mensagem = `${parte1} sua nota foi ${pessoAprovada.nota}`;
    console.log(mensagem);
}

const listaDePessoasAprovadas = [
    {nome: 'Jerry Mors', email: 'jerry@exemple.com', nota: 51},
    {nome: 'Rabbit Jessica', email: 'jessica@exemple.com', nota: 101},
    {nome: 'Ada Lovelace', email: 'ada.lovelace@exemple.com', nota: 150},
    {nome: 'Bruno Gomes', email: 'bruno@exemple.com', nota: 0},
    {nome: 'Augustina Vega', email: 'augustina@exemple.com', nota: 101},
    {nome: 'Daniel Soto', email: 'daniel@exemple.com', nota: 50},
    {nome: 'Emiliano Domingues', email: 'emiliano@exemple.com', nota: 150},
    {nome: 'Carla Neta', email: 'carla@exemple.com', nota: 100},
];

const pessoasFiltradas = listaDePessoasAprovadas.filter((pessoa) => pessoa.nota >=100);

console.log(pessoasFiltradas);

pessoasFiltradas.forEach((pessoa) => enviarEmail(pessoa));