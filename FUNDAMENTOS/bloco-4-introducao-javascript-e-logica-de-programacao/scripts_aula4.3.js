// AQUECENDO
/*let acesso = true;
let qtdPaes = 10;
let sacola;
if (acesso === true) {
    for(let index = 0; index <= 10; index += 1){
        if (index == 0) {
            continue;
        }
          sacola = index;
          console.log("Tem " + sacola + " paes na sacola")
        if (index == 5) {
            break;           
        }
        }

} else{
    console.log("Não é possível acessar a página")
}
*/

















// EXEMPLO FOR DENTRO DE FOR
let qtd = 10;
let ingredientes = ["queijo","presunto","maionese"];
let sacola = [];

for (let index = 0; index < 10; index += 1){
    //console.log("exectuou fora: ", index)
    let pao = []
    for(let index = 0; index < ingredientes.length; index +=1){
        //console.log("exectuou dentro: ", index);
        pao.push(ingredientes[index]);
    }

    sacola.push(pao);
}
console.log("sacola: ", sacola);


























/*
// MUNIÇÃO PARA DINÂMICA
// Formas de apagar elementos na array
//xTrybe.pop(); Deleta o último
//xTrybe.shift(); Deleta o primeiro
//delete xTrybe[2]; Deleta ítem do lugar
// xTrybe.length = 0; Apaga tudo
//array.splice(index, howmany, item1)
    //xTrybe.splice(2, 1,);
//Pesquisar conteúdo na array 
//xTrybe.indexOf("bacon");
let xTrybe = ["pão", "queijo", "bacon", "alface", "ketchup", "pão"];
let indiceRetornado = xTrybe.indexOf("bacon");

xTrybe.splice(indiceRetornado, 1,);

console.log(xTrybe);*/