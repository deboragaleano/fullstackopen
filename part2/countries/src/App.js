import React, {useState, useEffect} from 'react';
import axios from 'axios'

function App() {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState('')

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${country}`)
      .then(response => {
        setCountries(response.data)
      })
  }, [country])

  const searchCountry = (e) => {
    e.preventDefault();
  }
  
  const handleSearch = (e) => {
    setCountry(e.target.value)
  }

  const condiDisplay = 
      countries.length > 10 
      ? <p>Too many matches, specify another</p> 
      : countries.length <= 10 && countries.length > 1 
      ? countries.map(c => <p key={c.alpha2Code}>{c.name}</p>)
      : countries.length === 1 
      ? countries.map(c => 
          <div key={c.alpha2Code}>
            <h1>{c.name}</h1> 
            <p>capital: {c.capital}</p> 
            <p>population: {c.population}</p> 
            <h2>Languages</h2>
              {c.languages.map(l => <li key={l.iso639_1}>{l.name}</li>)}
            <img style={{width: '50%'}}src={c.flag} alt={c.name}/>
          </div>)
        : '';

  return (
    <div className="App">
        <h1>Countries</h1>
        <form onSubmit={searchCountry}>
          find countries 
          <input 
            value={country}
            onChange={handleSearch}
          /> 
        </form>
        {condiDisplay}
    </div>
  );
}

export default App;