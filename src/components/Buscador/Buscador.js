import React from 'react';
import styles from './Buscador.css';

class Buscador extends React.Component {
  busquedaRef = React.createRef();

  obtenerDatos = (e) => {
    e.preventDefault();

    const termino = this.busquedaRef.current.value;
    this.props.datosBusqueda(termino);
  }

  render() {

    return <div >
            <form onSubmit={this.obtenerDatos} className="row">
                <div className="form-group col-md-8">
                  <input type="text" ref={this.busquedaRef}  className="form-control form-control-lg" placeholder="Escribe algo, musica, pc, futbol"/>
                </div>
                <div className="form-group col-md-4">
                  <input  type="submit" value="Buscar" className="form-control btn btn-lg btn-outline-primary"/>
                </div>
            </form>
          </div>
  }
};

Buscador.propTypes = {

};

export default Buscador;