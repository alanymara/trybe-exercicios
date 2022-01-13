/* 
Ao rodar esse código você vai perceber que no console foi impresso Promise { <pending> } ao invés da piada. 
Como foi explicado no tópico de Promises, se o fluxo assíncrono não for controlado, ela vai retornar o seu 
estado e não o dado requisitado.

const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  console.log(fetch(url));
}

fetchJoke(); */

const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`)); // Adicionando .catch() ao código:
}

fetchJoke();
// Algo deu errado :( 
// TypeError: Only absolute URLs are supported


// Refatorando com ASYNC - await
const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  const result = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.value)
    .catch((error) => `Algo deu errado :( \n${error}`);
  
  console.log(result);
};

fetchJoke();
// Chuck Norris can write multi-threaded applications with a single thread.


// Refatorando com ASYNC - try, catch
const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.value);
  } catch(error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
}

fetchJoke();
// Chuck Norris can write multi-threaded applications with a single thread.