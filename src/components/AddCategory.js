import React, { useState } from 'react'
import PropTypes from 'prop-types'
export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const HandleInputChange = ( e ) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length > 2 ){

        setCategories( cats => [ inputValue, ...cats, ]);
        }
    }

    return (
        
            <form onSubmit={ handleSubmit }>          
                <input
                type="text"
                value={ inputValue }
                onChange={ HandleInputChange }
                />
           </form>
        
    )
}

AddCategory.prototype = {
    setCategories: PropTypes.func.isRequired
}
