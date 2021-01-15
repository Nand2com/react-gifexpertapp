//rafc
import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) =>{

       // console.log(e);
        setInputValue(e.target.value);
    }

    const hadleSubmit = (e) =>{

        e.preventDefault();
      if( inputValue.trim().length>2){

      
         setCategories((value) => [inputValue, ...value]);
         setInputValue('');
       }
  
    }

    return (
        <form onSubmit={hadleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            >
                
            </input>
        </form>
    )
}



AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

AddCategory.defaultProps = {
}
   
