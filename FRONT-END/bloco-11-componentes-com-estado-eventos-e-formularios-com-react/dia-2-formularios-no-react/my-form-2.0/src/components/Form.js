import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form>
        <fieldset>
          <label>Nome:
            <input type="text" maxLength='40' style={ {textTransform: "uppercase"} } required={true}/>
          </label>
          <label>Email:
            <input type="text" maxLength='50' required={true}/>
          </label>
          <label>CPF:
            <input type="number" maxLength='11' required={true}/>
          </label>
          <label>Endereço:
            <input type="text" maxLength='200' required={true} pattern={ "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i" } />
          </label>
        </fieldset>
      </form>
    );
  }
}

export default Form;