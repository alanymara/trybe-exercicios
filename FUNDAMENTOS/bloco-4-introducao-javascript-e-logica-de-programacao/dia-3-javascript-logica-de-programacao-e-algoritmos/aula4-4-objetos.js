// ARRAY
// Com colchetes 
let arrNome = [];

// OBJETO
// Com chaves
let arrAl = {};

/*let firstName = "Alany";
let lastName = "Fernandes";
let age = 25;
let canDrive = false;
let favoritesMovies = ["Friends", "Matrix"];*/

let person = {
// Començar a adicionar as propriedades (Sem let e ; e colocando : no lugar de =), para separar as propriedades das outras, deve-se colocar ","
firstName: "Alany",
lastName: "Fernandes",
age: 25,
canDrive: false,
favoritesMovies: ["Friends", "Matrix"],
adress: {
     street: "Rua Jardim Colares",
     number: 160,
}

}
// LENDO OBJETOS
console.log("Item: ", person.adress.street)
// Notação de ponto . exige que as propriedades estejam de acordo com a convenção
// Notação de colchetes. Demora mais
console.log("Item: ", person['firstName']);

// ATIALIZAR OBJETOS
person.firstName = "Mara";
// ou person['firstName'] = "Mara";
console.log(person.firstName)

//DELETANDO PROPRIEDADE DE OBJETOS
delete person.canDrive;
console.log(person)

//ITERANDO ITENS DE UM OBJETO
// Cada rodada do for, o key vai se transformar na propriedade em questão
// for of ---> somente para array. for in ---> para array e objetos.
for (let key in person){
     console.log("Key in objeto: ", person[key])
     if (key == 'firstName') {
          break;
     }
}

// COMPARACAO OF E IN COM ARRAY
let pessoa = ["Armando", "Alves", 34]
// O of devolve o conteúdo
for(let key of pessoa){
     console.log("key of: ", key)
}
// O in devolve a posição
for(let key in pessoa){
     console.log("key of: ", key)
}

// JSON vs OBJETO JAVASCRIPT
/*  json
     - sem funções
     - sem comentários
     - propriedade e string com aspas duplas