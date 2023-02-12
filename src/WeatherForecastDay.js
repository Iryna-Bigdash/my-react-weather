import React from "react";

export default function WeatherForecastDay(props){
    function maxTemperature(){
        let temperature = Math.round(props.data.temperature.maximum);
        return `${temperature}°`;
    }

    function minTemperature(){
        let temperature = Math.round(props.data.temperature.minimum);
        return `${temperature}°`;
    }

    function day(){
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();
let days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
]
        return days[day];
    }

return (
    <div>
        <ul className="WeatherForecast-list">
        <li className="WeatherForecastDay">
            {day()}
        </li>
        <li className="WeatherForecastUrl">
         Icon
            </li>
        <li className="WeatherForecastTemperature">
            <span className="WeatherForecastTemperature-max">
                {maxTemperature()}</span>
            <span className="WeatherForecastTemperature-min">
                {minTemperature()}</span>
            </li>
    </ul>
    </div>
)
};