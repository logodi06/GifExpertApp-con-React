//import React, { useState, useEffect } from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs';
import  GifGridItem  from './GifGridItem';
import PropTypes from 'prop-types';
export const GifGrid = ({category}) => {
    // const [images, setimages] = useState([]);

    const {data: images, loading} = useFetchGifs(category);


    //Esta instrucción useEffect hace que cuando se cargue el componente por primera vez, se lance la petición para obtener los
    //gifs y los coloca en las imagenes
    // useEffect(() => {
    //     getGifs(category)

    //         //Aqui se tiene una función donde su primer argumento es mandado como primer
    //         //argumento a la función que está adentro "setImages", por lo tanto lo siguiente
    //         //se puede reducir y dejarlo de la sig. manera
    //         // .then( setimages);
    //         .then( imgs => setimages(imgs));
    // },[category])
   

    //getGifs();
    return ( 
        <>
        <h3 className='animate__animated animate__fadeIn'>{category}</h3>
        {/* //Si el loading es falso no se debe de mostrar el siguiente <p> */}
        {loading && <p className='animate__animated animate__flash'>Loading</p> }
        <div className='card-grid'>
             
                 {/*<ol> {
                     //Una forma de recorrer y crear <li></li> por cada 
                     //valor que tiene el arreglo
                    //  images.map (image => {
                    //      return   <li key={image.id}>{image.title}</li>
                    // })
                    images.map (({id, title}) => (<li key={id}>{title}</li>))
                 }
                  </ol>s                 */}
                 {
                     images.map( (img) => (
                         <GifGridItem 
                            key={img.id}
                            //Se manda el objeto spret (...) del img
                            {...img} 
                            //Forma de mandan el argumento 
                            //img = {img}
                          />
                     ))
                 }   
           
        </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}