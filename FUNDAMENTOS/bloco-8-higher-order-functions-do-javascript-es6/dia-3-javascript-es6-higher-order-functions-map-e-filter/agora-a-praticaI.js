const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
/* 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA */

// const formatedBookNames = books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
// console.log(formatedBookNames);

function formatedBookNames() {
    return books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
  }
  console.log('Questão 1', formatedBookNames());

/* 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade 
author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o 
livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha, 
considerando suas idades quando o livro foi lançado. */
 
  function nameAndAge() {
      return books.map((book) => (
          {
              age: book.releaseYear - book.author.birthYear,
              author: book.author.name,
          })).sort((item1, item2) => item1.age - item2.age);
  }
  
  console.log('Questão 2', nameAndAge());
  /* {
    const authors = books.map((book) => ({
        age: book.releaseYear - book.author.birthYear,
        author: book.author.name
    }))
    return authors.sort((item1, item2) => item1.age - item2.age);
  }
  console.log(nameAndAge());

 */

/* 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia. */

function fantasyOrScienceFiction() {
    return books.filter((book) => (book.genre === 'Fantasia' || book.genre === 'Ficção Científica'));
}
const armazenar1 = fantasyOrScienceFiction();
  console.log('Questão 3', fantasyOrScienceFiction());

/* 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho. */

function oldBooksOrdered() {
    const currentYear = new Date().getFullYear();
    return books.filter((book) => ( currentYear - book.releaseYear > 60)).sort((item1, item2) => item1.releaseYear - item2.releaseYear);
  }
  const armazenar2 = oldBooksOrdered();
  console.log('Questão 4', oldBooksOrdered());

/* 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia. */

function fantasyOrScienceFictionAuthors() {
   return armazenar1.map((book) => book.author.name).sort()
  }
  console.log('Questão 5', fantasyOrScienceFictionAuthors());

/* 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação. */

function oldBooks() {
   return armazenar2.map((book) => book.name);
  }

  console.log('Questão 6', oldBooks());

 /* 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais. */

 function authorWith3DotsOnName() {
    return books.filter((book) => (
        book.author.name[1] ==='.' && book.author.name[4] === '.' && book.author.name[7] === '.'))[0].name;
  }

/* function authorWith3DotsOnName2() {
  return books.find((book) => (
    book.author.name.split(' ').filter((word) => word.endsWith('.')).length === 3)).name;
}
  console.log('Questão 7', authorWith3DotsOnName()); */
