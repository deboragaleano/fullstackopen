import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const searchCountry = (e) => {
    e.preventDefault()
    // add functionality!! 
  }
  
  const handleSearch = (e) => {
    setCountry(e.target.value)
  }

  // const country = countries.map(c => c.name === 'Afghanistan')
  // console.log(country)

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
    </div>
  );
}

export default App;
