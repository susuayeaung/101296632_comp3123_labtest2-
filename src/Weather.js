import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';

export default function GetWeather() {

    const [weather, setWeather] = useState([]);

    let d = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let weekDay = days[d.getDay()];

    const icon = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`
 
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=d015031761f25a35bd9e4b3e71e85352'

    useEffect(() => {
        axios.get(apiUrl)
        .then(res =>  { 
            setWeather({ 
                main: res.data.weather[0].main,
                description: res.data.weather[0].description,
                icon: res.data.weather[0].icon,
                temp: res.data.main.temp,
                feels_like: res.data.main.feels_like,
                humidity: res.data.main.humidity,
                name: res.data.name,
             })
        })
        .catch(error => console.log(error))
    }, [])

    return (
        <div class='mainScreen'>
            <p class="bold">{weather.name}</p>
            <div>
                <img src={icon} alt='weatherIcon'/>
                <p class="bold">{weather.temp} ℉</p>
                <p class="bold">{weather.main}</p>
                <p>{weekDay}</p>
                <div>
                    <p>Description: {weather.description} <tab>Feels like: {weather.feels_like} ℉ </tab>  </p>
                    <p>Humidity: {weather.humidity} %</p>
                </div>
            </div>
        </div>
    )
}
