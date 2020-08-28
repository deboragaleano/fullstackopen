import React from 'react'

function Country({country}) {
    return (
        <div key={country.alpha2Code}>
          <h1>{country.name}</h1> 
          <p>capital: {country.capital}</p> 
          <p>population: {country.population}</p> 
          <h2>Languages</h2>
            {country.languages.map(l => <li key={l.iso639_1}>{l.name}</li>)}
          <img style={{width: '50%'}}src={country.flag} alt={country.name}/>
        </div>
    )
  }

export default Country; 