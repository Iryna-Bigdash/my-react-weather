import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";


export default function Weather(props){
const [weatherData, setweatherData] = useState({ ready:false });
const [city, setCity] = useState(props.defaultCity);

function handleResponse (response){
    // console.log(response.data);
    setweatherData({
ready: true,
coordinates: response.data.coordinates,
temperature: response.data.temperature.current,
humidity: response.data.temperature.humidity,
wind: response.data.wind.speed,
city: response.data.city,
country: response.data.country,
description: response.data.condition.description,
iconUrl: response.data.condition.icon_url,
date: new Date(response.data.time * 1000),

    })
}
function search (){
    const apiKey = 'fb78b5cbo1fdf35t140380a70f3a9d98';
    let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event){
event.preventDefault();
search();

};
function handleCityChange(event){
setCity(event.target.value);
};

if (weatherData.ready) {
    return (
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                <div className="col-9">
                <input type="search" 
                placeholder="Enter a cyty.."
                className="form-conrtol"
                autoFocus="on"
                onChange={handleCityChange}
                 >
                </input>
                </div>
                <div className="col-3">
                <input type="submit"
                value="Search"
                className="btn w-100">
                </input>
                </div>
                </div>
            </form>
            < WeatherInfo data={weatherData}/>
            < WeatherForecast coordinates={weatherData.coordinates} />
        </div>
        )
} else {
    search();
    return "Loading..";
}
};