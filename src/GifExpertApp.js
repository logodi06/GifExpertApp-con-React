//Utilizar comando rafc para crear toda la estructura necesaria para la página

import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
 
/*export*/ const GifExpertApp = ( { defaultCategories  = [] }) => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    //const [categories, setcategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    //const [categories, setcategories] = useState(['One Punch']);
    const [categories, setcategories] = useState(defaultCategories);

    /*const handleAdd = () => {
        //Operador xprect se utiliza para agregar elementos a un arreglo, manteniendo el arreglo
        //que se tenia anteriormente
        setcategories([...categories, 'XMEN']);

        //Otra forma de agregar al arreglo
        //setcategories(cats => [...cats, 'XMEN']);
    }*/


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setcategories= {setcategories} />
            <hr/>
        
            <ol>
                {
                    //Metodo map, es un método que tienen los arreglos y sirve para 
                    //recorer los valores del arreglo
                    //EL map recibe 2 elementos, categoria y el indice
                    // categories.map( category => {
                    //     return <li key={category}> {category}</li> 
                    // })
                    categories.map( category => (
                        <GifGrid 
                            key={category}
                            category={category} 
                        />
                      ))
                }
            </ol>
        </>
    )
}

  
  export default GifExpertApp