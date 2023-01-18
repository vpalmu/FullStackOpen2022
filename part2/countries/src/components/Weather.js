
import axios from 'axios';
import { useState, useEffect } from 'react';
import Image from './Image';

const Weather = ({ country }) => {
    console.log('rendering Weather...')
    const [weatherData, setWeatherData] = useState(null) 

    const fetchWeatherDataHook = () => {
        console.log('effect running to load weather data for:', country.name.common)
        const key = process.env.REACT_APP_API_KEY
        const rootUrl = process.env.REACT_APP_API_ROOT 
        const url = `${rootUrl}?q=${country.capital}&appid=${key}&units=metric`
        
        console.log('making weather api call..')
        axios.get(url)
            .then(result => {
              console.log('updating weatherData state..')
              setWeatherData(result.data) 
            })
      }
    
    useEffect(fetchWeatherDataHook, [country])

    return (
        <>
            { weatherData === null
                ? <p>loading..</p> 
                : <div>
                    <p>Weather in {country.capital}: {weatherData.weather[0].description},  { weatherData.main.temp } Celcius</p>
                    <Image imageUrl= { 'http://openweathermap.org/img/wn/' + weatherData.weather[0].icon + '@2x.png' } />
                    <p>Wind: { weatherData.wind.speed } m/s</p>
                  </div>
            }
        </>
    )
}

export default Weather