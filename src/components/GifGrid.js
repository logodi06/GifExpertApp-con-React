import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    const [images, setimages] = useState([]);

    useEffect(() => {
        getGifs(category)

            //Aqui se tiene una función donde su primer argumento es mandado como primer
            //argumento a la función que está adentro "setImages", por lo tanto lo siguiente
            //se puede reducir y dejarlo de la sig. manera
            // .then( setimages);
            .then( imgs => setimages(imgs));
    },[category])
   

    //getGifs();
    return ( 
        <>
        <h3>{category}</h3>
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
