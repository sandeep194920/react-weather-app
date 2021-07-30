import React, { useEffect } from 'react'
import { MdLocationOn } from "react-icons/md";
import { capitalizeUtility, convertDateUtility } from '../utilities/utilitiesFunctions';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';

function Highlights({ data, celsius, setCelsius }) {

    const { city: { name: cityName },
        list: [{ main: { temp, feels_like, temp_min, temp_max },
            weather: [{ description, icon }], dt_txt }] } = data
    const { day, month, hours12Format: hours, dayNumber: date } = convertDateUtility(dt_txt)

    // let temperatureIcon
    let temperatureIcon = <span>&#8451;</span>
    let celsiusIcon = temperatureIcon
    let fahrenheitIcon = <span>&#8457;</span>
    if (!celsius) temperatureIcon = <span>&#8457;</span>

    return (
        <section className="highlights-section">
            <article className="city-time">
                <div className="city-name-container">
                    <MdLocationOn className="city-icon icon" />
                    <h2>{cityName}</h2>
                </div>
                <h4>At {day}., {month} {date}, {hours}</h4>
            </article>
            <article className="temperature">
                <div className="city-name-container temp-container">
                    <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="climate-icon" />
                    <h1>{Math.floor(temp)} {temperatureIcon} </h1>
                    <div>
                        {celsius ?
                            <BsToggleOn onClick={() => setCelsius(prev => !prev)} className="temperature-toggle-icon" /> :
                            <BsToggleOff onClick={() => setCelsius(prev => !prev)} className="temperature-toggle-icon" />
                        }
                        <h5>{celsius ? fahrenheitIcon : celsiusIcon}</h5>
                    </div>
                </div>
                <h5>{Math.floor(temp_max)} {temperatureIcon} / {Math.floor(temp_min)} {temperatureIcon}  &nbsp; Feels like {Math.floor(feels_like)} {temperatureIcon}</h5>
                <div className="container">
                    <h4>{capitalizeUtility(description)}</h4>
                </div>
            </article>
        </section>
    )
}

export default Highlights
