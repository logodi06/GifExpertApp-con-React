import React, { useState } from 'react'
import propTypes from "prop-types";

//Props: Son las propiedades que son del padre, a un componente hijo.
//Se manda a llamar setCategories del componente padre con los props, pero se desfragmenta
export const AddCategory = ({setcategories}) => {
    
    //useState para controlar los valores del input text
    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {
        //console.log(e.target.value);
        setinputValue(e.target.value);
        console.log('HAndleInputChange llamado');
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //Handle resolver
        console.log('HandleSubmit',inputValue);
        //validar que el campo del input no mande un vacio o una palabra menor a 2 letras
        if(inputValue.trim().length>2){
            //Se utiliza el setCategories que se recibe del padre
            //como primer parametro se traen las categorias que ya tiene definido en el padre
            //y como segundo parametro se le manda el valor del input cuando en este se escriba y se mande
            setcategories(cats => [ inputValue,...cats]);
            setinputValue('');

        }
        //console.log('Submit hecho');
        
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            {/* <h1>{inputValue}</h1> */}
           <input 
                type="text"
                value={inputValue}
                onChange = { handleInputChange }

            />

        </form>

    )
}

AddCategory.propTypes = {
    setcategories: propTypes.func.isRequired
}
