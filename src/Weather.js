import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";


export default function Weather(props){
    const [weatherData, setweatherData] = useState({ ready:false });

function handleResponse (response){
    console.log(response.data);
    setweatherData({
ready: true,
temperature: response.data.temperature.current,
humidity: response.data.temperature.humidity,
wind: response.data.wind.speed,
city: response.data.city,
country: response.data.country,
description: response.data.condition.description,
iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
date: 'Wensday 7:00',

    })
}
if (weatherData.ready) {
    return (
        <div className="Weather">
            <form>
                <div className="row">
                <div className="col-9">
                <input type="search" 
                placeholder="Enter a cyty.."
                 className="form-conrtol">
                </input>
                </div>
                <div className="col-3">
                <input type="submit"
                value="Search"
                className="btn btn-primary w-100">
                </input>
                </div>
                </div>
            </form>
          <h1>{weatherData.city}</h1>
          <p>{weatherData.country}</p>
          <ul>
            <li>{weatherData.date}</li>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>
          <div className="row mt-3">
            <div className="col-6">
                <div className="clearfix">
                <img crs={weatherData.iconUrl}
                alt={weatherData.description} className="float-left">
                </img> 
        
                    <span className="temperature">{Math.round(weatherData.temperature)}</span><span className="unit">°C</span>
            </div>
            </div>
            <div className="col-6">
                <ul>
                    <li>Humidity: {weatherData.humidity}%</li>
                    <li>Wind: {weatherData.wind} km/h</li>
                </ul>
            </div>
        
          </div>
        </div>
        )
} else {
    const apiKey = 'fb78b5cbo1fdf35t140380a70f3a9d98';

    let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
}
};