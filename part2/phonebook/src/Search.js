import React from 'react'; 

const Search = (props) => {
    return (
        <input 
          value={props.query} 
          onChange={props.handleSearchName}
        />  
    )
}

export default Search; 
