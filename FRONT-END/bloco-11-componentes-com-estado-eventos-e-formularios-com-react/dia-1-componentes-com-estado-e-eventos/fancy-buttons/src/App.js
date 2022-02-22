import React from 'react';
import './App.css';

/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */



class App extends React.Component {
  constructor(props) {
    
    // A função `super()` é chamada para garantir que a lógica interna do React rode **antes** da sua. Se não for assim, o código não funcionará
    super()
    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.sendClick = this.sendClick.bind(this)
    this.clearClick = this.clearClick.bind(this)
    this.cancelClick = this.cancelClick.bind(this)

    this.state = {
      clickBtnSend: 0,
      clickBtnClear: 0,
      clickBtnCancel: 0
    }
    
   
  }
    // Sua lógica extra vai aqui! O parâmetro `props` é opcional, para você acessar as props diretamente no construtor
  //Repare que, diferentemente do HTML, no
  //JSX você associa uma função a um evento
  //passando a própria função entre chaves `{}`
  sendClick() {
    this.setState((estadoAnteriorSend, _props) => ({
      clickBtnSend: estadoAnteriorSend.clickBtnSend + 1
    }), () => {
      console.log(`Botão Send ${this.getButtonColor(this.state.clickBtnSend)}`);
    })
  }

  clearClick() {
    this.setState((estadoAnteriorClear, _props) => ({
      clickBtnClear: estadoAnteriorClear.clickBtnClear + 1
    }), () => {
      console.log(`Botão Send ${this.getButtonColor(this.state.clickBtnClear)}`);
    })
  }
  
  cancelClick() {
    this.setState((estadoAnteriorCancel, _props) => ({
      clickBtnCancel: estadoAnteriorCancel.clickBtnCancel + 1
    }), () => {
      console.log(`Botão Send ${this.getButtonColor(this.state.clickBtnCancel)}`);
    })
  }

  // Para essa função, não precisamos utilizar o bind porque ela é utilizada
  // apenas dentro do contexto do componente App
  getButtonColor(num) {
      // Essa função contém um ternário que realiza a lógica para mudarmos
      // a cor do botão para verde quando for um número par
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { clickBtnSend, clickBtnClear, clickBtnCancel } = this.state;
    return (
    <>
      <button onClick={ this.sendClick } style={{ backgroundColor: this.getButtonColor(clickBtnSend) }}>
        Send | Count = { clickBtnSend }
      </button>
      <button onClick={this.clearClick} style={{ backgroundColor: this.getButtonColor(clickBtnClear) }}>
        Clear | Count = { clickBtnClear }
      </button>
      <button onClick={this.cancelClick} style={{ backgroundColor: this.getButtonColor(clickBtnCancel) }}>
        Cancel | Count = { clickBtnCancel }
      </button>
    </>
    )
  }
      
    /* constructor(props) {
      super()
      this.sendClick = this.sendClick.bind(this)
      // Estado inicial
      this.state = {
        numeroDeCliques: 0,
      }
    }

    sendClick() {
      this.setState((estadoAnterior, _props) => ({
        numeroDeCliques: estadoAnterior.numeroDeCliques + 1
      }))
    }
  
    render() {
      console.log(this);
      return <button onClick={this.sendClick}>{this.state.numeroDeCliques}</button>
    } */
  }


export default App;
