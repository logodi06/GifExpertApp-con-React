import React from 'react';

//Short cut para importar los proptypes
//impt
import PropTypes from 'prop-types';

 const GifGridItem = ( {title, url} ) => {
    //console.log(id, title, url );
    return (
        <div className='card animate__animated animate__fadeIn '>
            <img src={url} alt={title}/>
            <p> {title} </p>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
} 

export default GifGridItem;

//El error que da al ejecutar el test 
//Cannot read property 'contextTypes' of undefined, hay que cambiar la forma en exportar
//el componente y hay que colocar el export default.