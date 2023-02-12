import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import { cleanup } from "@testing-library/react";


export default function WeatherForecast(props){
    let[loaded, setLoaded] = useState(false);
    let[forecast, setForecast] = useState(null);

    useEffect(() => {
  setLoaded(false);
}, [props.coordinates]);


    
    function hendleResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);
// console.log(response.data);
// console.log(props);
console.log(response.data.daily);
    }

if(loaded) {
   console.log(forecast);
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
    <WeatherForecastDay data={forecast[0]} />
                </div>
                <div className="col">
    <WeatherForecastDay data={forecast[1]} />
                </div>
                <div className="col">
    <WeatherForecastDay data={forecast[2]} />
                </div>
                <div className="col">
    <WeatherForecastDay data={forecast[3]} />
                </div>
                <div className="col">
    <WeatherForecastDay data={forecast[4]} />
                </div>
            </div>
        </div>
    )    
} else {
    let apiKey = "fb78b5cbo1fdf35t140380a70f3a9d98";
    let lontitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${lontitude}&key=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(hendleResponse);
    
    return null;
}
};