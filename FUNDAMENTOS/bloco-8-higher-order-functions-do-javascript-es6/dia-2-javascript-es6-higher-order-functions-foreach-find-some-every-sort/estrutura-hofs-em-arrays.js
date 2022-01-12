// HOF que imprime na tela cada valor do array:
const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element) => {
  console.log('Cada elemento do array:', element);
});

// Cada elemento do array: josé
// Cada elemento do array: 50
// Cada elemento do array: 0.25
// Cada elemento do array: { comida: 'Chocolate' }

//Sua estrutura:
arrayOfValues.forEach((element) => {
    console.log('Cada elemento do array:', element);
  });

 /*  Suas partes:
        1-arrayOfValues - Nome do array que será percorrido;
        2-.forEach - A HOF , pode ser, .find , .some , .every ;
        3-element - Valor do elemento do array;
        4-(element) => {console.log('Cada elemento do array:', element); - função a ser executada, 
        pode ser passada igual ao terceiro exemplo do conteúdo com a função verifyGrade .
 */
//--------------------------------------------------------------------------------------
 /*  A arrow function passada para o forEach possui element , index e array como parâmetros, onde:
        1-element - Valor do elemento do array;
        2-index - Índice em cada iteração ou posição do elemento no array, começando do 0;
        3-array - Array original que está sendo percorrido.
         */

        const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
        arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
          console.log('Cada elemento do array:', element);
          console.log('Index, posição do elemento:', indexOfTheArray);
          console.log('Array percorrido:', theEntireArray);
        });
        
        // => ---------------
        //   Cada elemento do array: josé
        //   Index, posição do elemento: 0
        //   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
        //   ---------------
        //   Cada elemento do array: 50
        //   Index, posição do elemento: 1
        //   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
        //   ---------------
        //   Cada elemento do array: 0.25
        //   Index, posição do elemento: 2
        //   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
        //   ---------------
        //   Cada elemento do array: { comida: 'Chocolate' }
        //   Index, posição do elemento: 3
        //   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]        