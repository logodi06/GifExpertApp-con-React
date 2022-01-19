import React from 'react';
import ReactDOM from 'react-dom';

//Si se utiliza el export de forma directa, colocando el export en la función de GifExpertApp
//se debe colocar el nombre de la importación sobre "{}" ejem:  {GifExpertApp}
//Pero si se exporta con el defaul "export default GifExpertApp" no se deben colocar "{}"
//Solo el nombre  GifExpertApp
import GifExpertApp from './GifExpertApp';
import './index.css';

ReactDOM.render(
  
    <GifExpertApp />,

  document.getElementById('root')
);


