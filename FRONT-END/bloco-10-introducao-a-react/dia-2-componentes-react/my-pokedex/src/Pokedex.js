/* import pokemons from './data';
import Pokemon from './Pokemon'

function App() {
  return (
    <div className="App">
      {pokemons.map(pokemon => <Pokemon key={pokemon.id} name={pokemon.name} type={pokemon.type} averageWeight={pokemon.averageWeight} image={pokemon.image} />)}
    </div>
  );
}

export default App; */

import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    render() {
      const { pokemons } = this.props;
      // Recebemos do App.js, através da props "pokemons", o nosso array de pokemons.
      // Devemos fazer um map, e nele renderizar o componente <Pokemon>, que receberá
      // por props cada item do array.
      // Lembre-se: é no componente Pokemon que iremos
      // renderizar todas as informações necessárias para a exibição.
        return (
            <div className="pokedex">
                {pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
            </div>
        );
    }
}

export default Pokedex;
