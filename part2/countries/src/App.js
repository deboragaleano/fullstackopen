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

  const condiDisplay = () => {
    if(countries.length > 10) {
      return <p>Too many matches, specify another</p>
    } else if(countries.length <= 10 && countries.length > 1) {
      return countries.map(c => <p key={c.alpha2Code}>{c.name}</p>)
    } else if(countries.length === 1) {
      const showCountry =
        countries.map(c => 
          <div key={c.alpha2Code}>
            <h1>{c.name}</h1> 
            <p>capital: {c.capital}</p> 
            <p>population: {c.population}</p> 
            <h2>Languages</h2>
              {c.languages.map(l => <li key={l.iso639_1}>{l.name}</li>)}
            <img style={{width: '50%'}}src={c.flag} alt={c.name}/>
          </div>
        )
      return showCountry
    }
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
        {condiDisplay()}
    </div>
  );
}

export default App;



  // If there are too many (over 10) countries that match the query, then the user is prompted to make their query more specific:
  // If there are ten or fewer countries, but more than one, then all countries matching the query are shown:
  // When there is only one country matching the query, then the basic data of the country, its flag and the languages spoken there, are shown:

  // switch (countries) {
  //   case countries.length > 10: 
  //     return <h1>Too many matches, specify another</h1>
  //   case countries.length <= 10 && countries.length > 1: 
  //     return <ul>
  //       {countries.map(c => <li>{c.name}</li>)}
  //     </ul>
  //   case countries.length === 1: 
  //     return <ul>
  //     {countries.map(c => <li>{c.name} {c.capital}</li>)}
  //     </ul>
  //   default: 
  //     return ''
  // } 

  // TODO: 
  // REFACTOR 
  //	var category = eatsPlants && eatsAnimals ? "omnivore": 
  // eatsPlants ? "herbivore" : eatsAnimals ? "carnivore" : undefined; 
