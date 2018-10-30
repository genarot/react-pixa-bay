import React from 'react';
import styles from './Navegacion.css';

class Navegacion extends React.Component {
  static propTypes = {

  }
  render = () => ( 
    <div className="col-12 py-5">
      <button type="button" className="btn btn-lg btn-info mr-1">&larr; Anterior</button>
      <button type="button" onClick={this.props.paginaSiguiente} className="btn btn-lg btn-info ml-1">Siguiente &rarr;</button>
    </div>
  )
}

export default Navegacion;
