import React from 'react'
import Weather from './Weather'

const Country = ({country, weather, setWeather, api_key}) => {
    return (
        <div>
        <h1>{country.name}</h1>
        <ul>capital {country.capital}</ul>
        <ul>population {country.population}</ul>
        <h2>languages</h2>
        {country.languages.map(language =>
            <li key={language.iso639_1}>
                {language.name}
            </li>)
        }
        <img src={country.flag}
             width="200"
             alt="Flag of the country"/>
         <Weather city={country.capital}
                  weather={weather}
                  setWeather={setWeather}
                  api_key={api_key}
        />
    </div>
    )

}

export default Country
