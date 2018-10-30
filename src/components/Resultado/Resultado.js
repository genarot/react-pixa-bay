import React from 'react';
import styles from './Resultado.css';
import Imagen from '../Imagen/Imagen';
import Navegacion from '../Navegacion/Navegacion';

class Resultado extends React.Component {
  static propTypes = {

  }

  mostrarImagenes = () => {
    const imagenes = this.props.imagenes;
    if ( imagenes.length === 0 ) return null;
    console.log(this.props.imagenes);
    
    return (
      <React.Fragment>
        <div id="resultado" className="col-12 p-4 row" >
          {
            imagenes.map(imagen => {
              return <Imagen 
                  key={imagen.id}
                  imagen={imagen}
                />
            })
          }
        </div>
        <Navegacion paginaSiguiente={this.props.paginaSiguiente}/>
      </React.Fragment>
    )
  }
  render = () => (
    <React.Fragment>
      {this.mostrarImagenes()}
    </React.Fragment>
  )
}

export default Resultado;