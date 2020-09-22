import React from 'react'; 

const Search = ({query, onChange}) => {
    return (
        <input 
          value={query} 
          onChange={onChange}
        />  
    )
}

export default Search; 
