import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Country from './Country'
import Countries from './Countries'

function App() {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState('')

  useEffect(() => {
    async function getCountries() {
      const response = await axios.get(`https://restcountries.eu/rest/v2/name/${country}`)
      setCountries(response.data)
    }
    getCountries();
  }, [country])

  const searchCountry = (e) => {
    e.preventDefault();
  }
  
  const handleSearch = (e) => {
    setCountry(e.target.value)
  }

  const showCountry = (id) => {
    const clickedCountry = countries.filter(country => 
      country.alpha2Code === id ? country : ''
    )
    setCountries(clickedCountry)
  }

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
        {
          countries.length > 10 
          ? <p>Too many matches, specify another</p> 
          : countries.length <= 10 && countries.length > 1 
          ? <Countries countries={countries} show={showCountry}/>
          : countries.length === 1 
          ? countries.map(c => <Country key={c.alpha2Code} country={c}/>)
          : null
        }
    </div>
  );
}

export default App;

/**
 * TODO 
 * - Refactor the 'empty string' there on ShowCountry and on conditional rendering
 * - Fix all red errors 
 */
