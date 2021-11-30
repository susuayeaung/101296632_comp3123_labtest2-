import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';

export default function GetWeather() {

    const [weather, setWeather] = useState([]);

    let d = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const cities = ['Ottawa', 'Edmonton', 'Victoria', 'Winnipeg', 'Fredericton', 'St. John\'s', 'Halifax', 'Toronto', 'Charlottetown', 'Quebec City', 'Regina', 'Yellowknife', 'Iqaluit', 'Whitehorse'];
    let city = cities[Math.floor(Math.random() * cities.length)];
    let weekDay = days[d.getDay()];

    const icon = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`
 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d015031761f25a35bd9e4b3e71e85352`

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
                country: res.data.sys.country,
                wind_speed: res.data.wind.speed,
                time: res.data.timezone,
             })
        })
        .catch(error => console.log(error))
    }, [])

    return (
        <div class='mainScreen'>
            <p class="bold">{weather.name}</p>
            <p>{weather.country}</p>
            <div>
                <img src={icon} alt='weatherIcon'/>
                <p class="bold">{weather.temp} ℉</p>
                <p class="bold">{weather.main}</p>
                <p>{weekDay}</p>
                <div>
                    <p>
                        Feels like: {weather.feels_like} ℉<tab>Description: {weather.description}</tab>
                        <tab>Wind Speed: {weather.wind_speed}</tab><br/>
                        Humidity: {weather.humidity} %
                    </p>
                </div>
            </div>
        </div>
    )
}
