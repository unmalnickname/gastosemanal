import React, { Component } from "react";

class FormularioGastos extends Component {
  //refs para leer los campos del formulario
  nombreGastos = React.createRef();
  cantidadGasto = React.createRef();

  crearGasto = (e) => {
    //prevenir comportamiento default
    e.preventDefault();
    //crear el objecto con los dato
    const gasto = {
      nombreGasto: this.nombreGastos.current.value,
      cantidadGasto: this.cantidadGasto.current.value
    };

    console.log(gasto);

    //agregarlo y enviarlo a props

    //resetear elf ormulario (optional)
    e.currentTarget.reset();
  };

  render() {
    return (
      <form onSubmit={this.crearGasto}>
        <h2>Agrega tus gastos aqui</h2>
        <div className="campo">
          <label>Nombre Gasto</label>
          <input
            ref={this.nombreGastos}
            className="u-full-width"
            type="text"
            placeholder="Ej. Transporte"
          />
        </div>

        <div className="campo">
          <label>Cantidad</label>
          <input
            ref={this.cantidadGasto}
            className="u-full-width"
            type="text"
            placeholder="Ej. 300"
          />
        </div>

        <input
          className="button-primary u-full-width"
          type="submit"
          value="Agregar"
        />
      </form>
    );
  }
}

export default FormularioGastos;
