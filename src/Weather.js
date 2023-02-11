import React from "react";
import "./Weather.css";

export default function Weather(){

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
        value="search"
        className="btn btn-primary">
        </input>
        </div>
        </div>
    </form>
  <h1>New York</h1>
  <ul>
    <li>
Wensday 07:00
    </li>
    <li>
Mostly Cloudy  
    </li>
  </ul>
  <div className="row">
    <div className="col-6">
        <img crs="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
        alt="Sunny">
        </img> 6°
    </div>
    <div className="col-6">
        <ul>
            <li>Precipitation: 1%</li>
            <li>Humidity: 43%</li>
            <li>Wind: 6 km/h</li>
        </ul>
    </div>

  </div>
</div>
)
};