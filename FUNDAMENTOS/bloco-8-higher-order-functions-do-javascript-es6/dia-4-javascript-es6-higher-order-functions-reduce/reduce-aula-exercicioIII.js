const { cervejas, pedidos, entregas } = require ();
/*Criar um array de objetos com as seguintes informações
- id do pedido
- descrição da cerveja
- quantidade de cervejas do pedido
- placa do veiculo que vai fazer a entrega*/


const funcaoReducer = (acumulador, valorCorrente) => {
    const objeto = {
        id: valorCorrente.id,
        descricao: cervejas.find((cerveja) => cerveja.codigo === valorCorrente.codigoCerveja).descricao,
        quantidade: valorCorrente.quantidade,
        placa: entregas.find((cerveja) => cerveja.pedidoId === valorCorrente.id).placa,
    }
    acumulador.push(objeto);
    return acumulador;
}


const arrayDeObjetos = pedidos.reduce(funcaoReducer, []);

console.log('O array formado é: ', arrayDeObjetos);