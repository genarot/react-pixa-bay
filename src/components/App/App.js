import React, { Component } from 'react';
import './App.css';
import Buscador from '../Buscador/Buscador';
import Resultado from '../Resultado/Resultado';
import Navegacion from '../Navegacion/Navegacion';

class App extends Component {

  state = {
    termino:'',
    images: [],
    pagina: '',
    cargando: false
  }

  consultarAPI  = () => {
    const termino = this.state.termino;
    let url = `https://pixabay.com/api/?key=10548870-7f69b364d0bc1a057a02c6618&q=${termino}&image_type=photo&pretty=true&per_page=30&page=${this.state.pagina}`;

    console.log(url);
    
    fetch(url)
    .then( res =>  {
      this.setState({
        cargando:true
      })
      return res.json()
    })
    .then( resultado => {
      this.setTimeout((resultado) => {
        
        this.setState({
           images: resultado.hits,
           cargando: false
         })
      }, 500);
    })
    .catch( err => {
      this.setState({
        cargando: false
      })
    })

  }
  scroll = () => {
    const elemento = document.getElementById('jumbotron');
    elemento.scrollIntoView('smooth', 'start')
  }
  datosBusqueda =(termino) => {
    this.setState({
      termino: termino,
      pagina: 1
    }, () => {
      this.consultarAPI();
     
    })
    
  }
  paginaAnterior = () => {
    let pagina  = this.state.pagina;
    if ( pagina === 1) return null;
    pagina -= 1;

    this.setState({
      pagina:pagina
    }, () => {
      
      console.log(pagina);
      this.consultarAPI();
      this.scroll();
    });

  }

  paginaSiguiente = () => {
    let pagina  = this.state.pagina;
    pagina += 1;

    this.setState({
      pagina:pagina
    },
    () => {
      this.consultarAPI();
      this.scroll();
    });

    console.log(pagina);
    
  }
  render() {
    let resultado;
    if ( this.state.cargando ) {
        resultado = <div className="spinner">
                      <div className="double-bounce1"></div>
                      <div className="double-bounce2"></div>
                  </div>
    } else {
      resultado = <Resultado
                  paginaAnterior = {this.paginaAnterior}
                  paginaSiguiente = {this.paginaSiguiente}
                  imagenes={this.state.images}
                  />;
    }
    return (
      <div className="app container">
        <div id="jumbotron" className="jumbotron">
          <p className="display-4 lead text-center">Buscador de Imagenes</p>
          <Buscador 
            datosBusqueda={this.datosBusqueda}/>
        </div>
        <div className="row justify text-center">
          {resultado}
        </div>
      </div>
    );
  }
}

export default App;
