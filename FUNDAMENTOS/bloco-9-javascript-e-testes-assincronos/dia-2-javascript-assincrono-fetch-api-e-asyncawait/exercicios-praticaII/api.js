/* 2. Vamos consultar uma API que fornece os valores de crypto moedas e mostrar as 10 primeiras.
url: `https://api.coincap.io/v2/assets`

Vamos criar um arquivo ( api.js , por exemplo) e dentro dele uma função para pegar o array com as moedas.
Crie também um arquivo HTML ( index.html , por exemplo) que deve conter uma tag para listar as crypto moedas.
Pronto, temos um array com os dados das moedas e um esqueleto do HTML, agora vamos fazer com que as moedas aparecam na tela. Utilize o seguinte formato: Nome da moeda (símbolo da moeda): valor em dólares . Exemplo: Bitcoin (BTC): 46785.06 .
Conseguiu mostrar as moedas na tela? Agora, que tal usar uma Higher Order Function para filtrar o array das moedas para mostrar apenas as 10 primeiras?
Não se esqueça de estilizar a página conforme o seu estilo (tanto no CSS quanto no HTML).
 */
// api.js
const fetchCoins = async () => {
    const url = 'https://api.coincap.io/v2/assets';
  
    const coins = await fetch(url)
      .then((response) => response.json())
      .then((data) => data.data)
      .catch((error) => error.toString());
  
    return coins;
  }
  
  const setCoins = async () => {
    const coins = await fetchCoins();
  
    const coinsList = document.getElementById('coins-list');
  
    coins
    .filter((coin) => Number(coin.rank) <= 10)
    .forEach((coin) => {
      const newLi = document.createElement('li');
  
      newLi.innerText = `${coin.name} (${coin.symbol}): ${coin.priceUsd}`;
  
      coinsList.appendChild(newLi);
    });
  }
  
  window.onload = () => setCoins();