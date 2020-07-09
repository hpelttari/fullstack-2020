import React from 'react'

const Country = ({country}) => {
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
    </div>
    )

}

export default Country
