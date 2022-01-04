let listaDePessoasAprovadas = [
    'ada.lovelace@example.com',
    'marie.curie@example.com',
    'margaret.hamilton@example.com',
    'alan.turin@example.com',
];

const enviarEmail = (objetoEmail) => {
    console.log(`Email para ${objetoEmail.email} com a nota ${objetoEmail.nota} enviado com sucesso!`)
};

let listaDeEmails;

listaDeEmails = listaDePessoasAprovadas.map((email) => {
    return { email: email, nota: 10};
});

listaDeEmails.forEach((objetoEmail) => enviarEmail(objetoEmail));

//------------------------------------------------------------------------
//Com For
const persons = [
    { firstName: 'Maria', lastName: 'Ferreira' },
    { firstName: 'João', lastName: 'Silva' },
    { firstName: 'Antonio', lastName: 'Cabral' },
  ];
  
  const fullNames = [];
  
  for (let index = 0; index < persons.length; index += 1) {
    fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
  }
  
  console.log(fullNames);


  //Com map
  const persons = [
    { firstName: 'Maria', lastName: 'Ferreira' },
    { firstName: 'João', lastName: 'Silva' },
    { firstName: 'Antonio', lastName: 'Cabral' },
  ];
  
  const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);
  
  console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]