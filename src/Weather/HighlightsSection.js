import React from 'react'
import { MdLocationOn } from "react-icons/md";
import { capitalizeUtility, convertDateUtility } from '../utilities/utilitiesFunctions';

function Highlights({ data }) {
    const { city: { name: cityName },
        list: [{ main: { temp, feels_like, temp_min, temp_max },
            weather: [{ description, icon }], dt_txt }] } = data
    const { dayName: day, month, hours12Format: hours, dayNumber: date } = convertDateUtility(dt_txt)
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
                    <h1>{Math.floor(temp)} &#8451;</h1>
                </div>
                <h5>{Math.floor(temp_max)} &#8451; / {Math.floor(temp_min)} &#8451; Feels like {Math.floor(feels_like)} &#8457;</h5>
                <div className="container">
                    <h4>{capitalizeUtility(description)}</h4>
                </div>
            </article>
        </section>
    )
}

export default Highlights
