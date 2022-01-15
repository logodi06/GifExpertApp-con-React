//al crear los hooks se recomienda crear un nuevo directorio dentro de src y llamarlo hooks.
//la palabra "use" indica que es un hooke, no es obligatorio ponerlo pero es un estandar para
//que otros desarrolladores sepan que es un hooks, todos los hooks inician con use.

//Los hooks son funciones

import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = (category) => {

    //Los hooks ppueden tener un estado y podrian indicar a otro componentes que lo utilizan cuando
    //deben de renderizarse porque algo cambio
   const [state, setState] = useState({
       data: [],
       loading: true
   });

   useEffect( () => {
        getGifs(category)
            .then(imgs => {
                //setTimeout( () =>{
                   // console.log(imgs);
                    setState( {
                        data: imgs,
                        loading: false
                    });
                //},3000)
            })
   },[category])
   

    return state;  //{data: [], loading:true}

}