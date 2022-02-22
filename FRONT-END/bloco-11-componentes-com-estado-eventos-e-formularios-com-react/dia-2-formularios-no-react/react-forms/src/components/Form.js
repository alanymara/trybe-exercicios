import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super()

    this.state = {
      estadoFavorito: '',
      nome: '',
      email: '',
      idade: 0,
      vaiComparecer: false,
      palavraChaveFavorita: '',
    }
  }
/*   
  handleTextAreaChange(event) {
    this.setState({ estadoFavorito: event.target.value })
  }

  handleEmail(event) {
    this.setState({ email: event.target.value })
  }

  handleNome(event) {
    console.log(event.target.value)
    this.state({ nome: event.target.value })
  }

  handleIdade(event) {
    this.state({ idade: event.target.value })
  }
  handleComparecer(event) {
   console.log(event.target.check)
    this.state({ vaiComparecer: event.target.check })
  }
 */
  handleChange = ({ target: { name, type, checked, value}}) => {
    const realValue = type === 'checkbox' ? checked : value;
    this.setState({ [name]: realValue })
  }


  render() {
    const { nome, idade, estadoFavorito, email, vaiComparecer, palavraChaveFavorita } = this.state;
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        {<form className="form">
          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você quem sabe!
              <textarea name="estadoFavorito" onChange={ this.handleChange } value={ estadoFavorito }/>
          </label>
          <label>
            Email
              <input name="email" type="email" onChange={this.handleChange} value={ email } />
          </label>
          <label htmlFor="nome">
            Nome
              <input name="nome" type="text" onChange={this.handleChange} value={ nome } />
          </label>
          <label>
            Idade
              <input name="idade" type="number" onChange={this.handleChange} value={ idade }/>
          </label>
          <label>
            Vai comparecer a conferência?
              <input name="vaiComparecer" type="checkbox" onChange={this.handleChange} value={ vaiComparecer } />
          </label>
          <label>
            Escolha sua palavra chave favorita:
            <select name="palavraChaveFavorita">
              <option value="estado">Estado</option>
              <option value="evento">Evento</option>
              <option value="props">Props</option>
              <option value="hooks">Hooks</option>
            </select>
          </label>
        </form>}
      </div>
    );
  }
}

export default Form;