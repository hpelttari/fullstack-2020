import React from 'react'

const Country = ({country}) => {
    return (
        <div>
        <h1>{country.name}</h1>
        <ul>capital {country.capital}</ul>
        <ul>population {country.population}</ul>
        <h2>Spoken languages</h2>
    </div>
    )

}

export default Country
