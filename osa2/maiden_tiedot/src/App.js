import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'
import Filter from './components/Filter'

const App = () => {
    const api_key = process.env.REACT_APP_API_KEY
    const [ countries, setCountries] = useState([]) 
    const [ filter, setFilter ] = useState('')
    const [ weather, setWeather ] = useState(false)
  
    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }
    useEffect(() => {
      axios
        .get('https://restcountries.eu/rest/v2/all').then(response => {
          setCountries(response.data)
        })
    }, [])
  return (
    <div>
        <Filter filter={filter} handleFilterChange={handleFilterChange}/>
        <Countries countries={countries}
                   filter={filter}
                   setFilter={setFilter}
                   weather={weather}
                   setWeather={setWeather}
                   api_key={api_key}
        />
    </div>
  )

}

export default App
