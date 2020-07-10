import React from 'react'
import Country from './Country'

const Countries = ({countries, filter, weather, setWeather, api_key}) => {

    const filteredCountries = countries.filter(country => 
            country.name.toLowerCase().includes(filter.toLowerCase()))

    if(filteredCountries.length > 10){
        return(
            <div>
                too many matches, specify another filter
            </div>
        )
    }
    if(filteredCountries.length === 1){
        return (
            <div>
                {filteredCountries.map(country =>
                    <Country key={country.name}
                             country={country}
                             weather={weather}
                             setWeather={setWeather}
                             api_key={api_key}
                            />)
                }
    
            </div>
        )
    }
    else{
    return (
      <div>
          {filteredCountries.map(country => <ul key={country.numericCode}>
              {country.name}
              </ul>)
          }
      </div>
    )

    }
}

export default Countries
