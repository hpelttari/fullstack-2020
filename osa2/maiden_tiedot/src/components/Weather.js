import React, {useEffect} from 'react'
import axios from 'axios'

const Weather = ({city, weather, setWeather, api_key}) => {
    const url =`http://api.weatherstack.com/current?access_key=${api_key}&query=${city}` 
    useEffect(() => {
      axios.get(url).then(response => {
          setWeather(response.data.current)
        })
    }, [setWeather, url])
    if(weather){
    return (
        <div>
            <h2>Weather in {city}</h2>
            <p> <b>temperature:</b> {weather.temperature}</p>
        <img src={weather.weather_icons[0]} alt="Weather icon" width="100"/>
        <p><b> wind:</b> {weather.wind_speed} mph direction {weather.wind_dir}</p>
    </div>
    )
    } else{
        return (
            <div>
            </div>
        )
    }
}

export default Weather
