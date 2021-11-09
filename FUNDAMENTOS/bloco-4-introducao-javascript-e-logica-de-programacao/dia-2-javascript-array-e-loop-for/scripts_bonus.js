//1. Ordene o array numbers em ordem crescente e imprima seus valores;
let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] < array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  }
  console.log(array);

//2. Ordene o array numbers em ordem decrescente e imprima seus valores;
for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] > array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  }
  console.log(array); 

//3. Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let newArray = [];

for(let i = 1; i <= numbers.length; i += 1){
    for(let index = i - 1; index < i; index += 1){
    let num1 = numbers[i];
    let num2 = numbers[index];
    if (num1 === undefined) {
      num1 = 2;
    }
    newArray.push(num1*num2);
    }

}
console.log(newArray);