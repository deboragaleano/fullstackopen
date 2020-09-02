import React from 'react'; 

const Search = ({query, handleSearch, searchContact}) => {
    return (
      <form onSubmit={searchContact}>
        filter shown with 
        <input 
          value={query} 
          onChange={handleSearch}/>
      </form>  
    )
}

export default Search; 
