import React from 'react'
import Country from './Country'

const Countries = ({countries, filter}) => {
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
                <Country key={country.name} country={country}/>)}
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
