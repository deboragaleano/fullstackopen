import React, {useState, useEffect} from 'react'; 
import axios from 'axios'; 

function Country({country}) {
    const [weather, setWeather] = useState({}); 
    const [img, setImag] = useState([])
    const api_key = process.env.REACT_APP_API_KEY

    useEffect(() => {  
        axios
          .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`)
          .then(resp => {
            console.log(resp.data)
            setWeather(resp.data.current)
            setImag(resp.data.current.weather_icons)
          })
      }, [country, api_key])

    return (
        <div key={country.alpha2Code}>
          <h1>{country.name}</h1> 
          <p>capital: {country.capital}</p> 
          <p>population: {country.population}</p> 
          <h2>Languages</h2>
            {country.languages.map(l => <li key={l.iso639_1}>{l.name}</li>)}
          <img style={{width: '50%'}}src={country.flag} alt={country.name}/>
          <h2>Weather in {country.capital}</h2>
          <h3>temperature  {weather.temperature} Celsius</h3>
            <img src={img[0]} alt={country.name}/> 
            <h3>Wind: {weather.wind_speed} mph direction {weather.wind_dir}</h3>
        </div>
    )
  }

export default Country; 