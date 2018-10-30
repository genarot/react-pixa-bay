import React from 'react';
import styles from './Imagen.css';

const Imagen = (props) => {

  const {largeImageURL, previewURL, likes, views}  = props.imagen;
  return <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-2">
            <div className="card">
              <img className="card-img-top" src={previewURL} />
              <div className="card-body">
                <p className="card-text">{likes} Me Gusta</p>
                <p className="card-text">{views} Vistas </p>
                <a href={largeImageURL} target="_blank" className="btn btn-danger btn-block">Ver Imagen</a>
              </div>
            </div>
          </div>
}

Imagen.propTypes = {

};

export default Imagen;
