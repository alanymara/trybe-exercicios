/* Pokemon : como o próprio nome diz, esse componente representa um pokemon. Esse componente recebe como entrada um objeto que contém informações referentes a um pokemon específico. Esse componente precisa retornar as seguintes informações obrigatórias para serem mostradas para quem usar a aplicação, essas informações devem ser validadas utilizando PropTypes:
- nome do pokemon;
- tipo do pokemon;
- peso médio do pokemon, acompanhado da unidade de medida usada;
- imagem do pokemon. */

/* import { Component } from 'react';
class Pokemon extends Component {
    render() {
        return <section>
                    <h1>{this.props.name}</h1>
                    <h2>{this.props.type}</h2>
                    <h2>{this.props.averageWeight.value}{this.props.averageWeight.measurementUnit}</h2>
                    <img src={this.props.image} alt='Imagem do Pokemon'/>
               </section>
    }
}

export default Pokemon; */

import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { pokemon: { name, type, averageWeight, image } } = this.props;
    // Fizemos um map no nosso array de pokemons
    // que vai renderizar o componente Pokemon para cada item do array.
    // Então, recebemos a props "pokemon" que é um objeto do array de pokemons
    // Nesses objetos temos informações como name, type e etc, então
    // desestruturamos essas informações e renderizamos em uma tag HTML,
    // no caso, utilizamos um <p>.

    return (
      <div className="pokemon">
        <div>
          <p id='nome'>{ name }</p>
          <p>{ type }</p>
          <p>
            {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
        </div>
        <img src={ image } alt={ `${name} sprite` } />
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;