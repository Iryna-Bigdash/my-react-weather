import React from "react";
import FormattedDay from './FormattedDay';
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
return (
    <div className="WeatherInfo">
    <h1>{props.data.city}</h1>
    <p>{props.data.country}</p>
    <div className="row flex-conteiner">
    <div className="col-6">
    <ul>
      <li><FormattedDay date={props.data.date} /></li>
      <li className="text-capitalize">{props.data.description}</li>
      <ul className="list-decoration">
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} km/h</li>
          </ul>
    </ul>
    </div>
    <div className="col-6">
          <div className="clearfix">
          <img src={props.data.iconUrl}
          alt={props.data.description} 
          className="float-left main-icon" 
         />
         <WeatherTemperature celsius={props.data.temperature} />
      </div>
      </div>
      </div>
    </div>
);
}