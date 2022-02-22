/* Por exemplo: imagine que você tem um array de objetos. 
Cada objeto é um estudante com seu nome, nota e situação no curso. 
Para ser aprovado, ele precisa obter uma nota acima de 60. 
Como você pode ver, o objeto abaixo está desatualizado e precisa ser atualizado: 
ele não contém a informação acerca da aprovação.  */

//Usando for
const students = [
    { name: 'Maria', grade: 70, approved: '' },
    { name: 'José', grade: 56, approved: '' },
    { name: 'Roberto', grade: 90, approved: '' },
    { name: 'Ana', grade: 81, approved: '' },
  ];
  
  function verifyGrades() {
    for (let i = 0; i < students.length; i += 1) {
      const student = students[i];
      if (student.grade >= 60) {
        student.approved = 'Aprovado';
      } else {
        student.approved = 'Recuperação';
      }
    }
  }
  
  verifyGrades();
  
  console.log(students);
  // [
  //   { name: 'Maria', grade: 70, approved: 'Aprovado' },
  //   { name: 'José', grade: 56, approved: 'Recuperação' },
  //   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
  //   { name: 'Ana', grade: 81, approved: 'Aprovado' }
  // ]

  // Usando forEach , faria a mesma coisa:

  const students = [
    { name: 'Maria', grade: 70, approved: '' },
    { name: 'José', grade: 56, approved: '' },
    { name: 'Roberto', grade: 90, approved: '' },
    { name: 'Ana', grade: 81, approved: '' },
  ];
  
  function verifyGrades() {
    students.forEach((student, index) => {
      if (student.grade >= 60) {
        students[index].approved = 'Aprovado';
      } else {
        students[index].approved = 'Recuperação';
      }
    });
  }
  
  verifyGrades();
  
  console.log(students);
  // [
  //   { name: 'Maria', grade: 70, approved: 'Aprovado' },
  //   { name: 'José', grade: 56, approved: 'Recuperação' },
  //   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
  //   { name: 'Ana', grade: 81, approved: 'Aprovado' }
  // ]

//--------------------------------------------------------------------------------------
  /* Queremos encontrar e imprimir no console o primeiro elemento de um array que satisfaça a uma determinada condição. 
  Pode ser, por exemplo, encontrar o primeiro número que seja divisível por 5 em uma lista de números. */
  
  //Usando for e if
  const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
    let firstMultipleOf5;
    for (let index = 0; index < numbers.length; index += 1) {
        if (numbers[index] % 5 === 0) {
        firstMultipleOf5 = numbers[index];
        break;
        }
    }

    console.log(firstMultipleOf5);
    // 50

    //Usando Array.find
    const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
    const firstMultipleOf5 = numbers.find((number) => number % 5 === 0);

    console.log(firstMultipleOf5);
    // 50