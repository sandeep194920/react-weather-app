import React, { useState, useEffect } from 'react'
import { divideOnDatesUtility, getMaxTempUtility, convertDateUtility, getMinTempUtility } from '../utilities/utilitiesFunctions';
import { IoIosArrowDown, IoMdArrowDropdown } from "react-icons/io";

function Daily({ data, activeDay, setActiveDay, setActiveDate, celsius, temperatureIcon }) {

    return (
        <section className="daily-section">
            <h2 className="heading">Daily</h2>
            <div className="daily-container">

                {divideOnDatesUtility(data).map((eachDay, selectedIndex) => {
                    const min = getMinTempUtility(eachDay)
                    const max = getMaxTempUtility(eachDay)
                    const { dt_txt: uniqueVal, main: { temp_max: maxTemp }, weather: [{ icon: iconMax }] } = max
                    const { main: { temp_min: minTemp }, weather: [{ icon: iconMin }] } = min
                    const { dayName: day } = convertDateUtility(uniqueVal)

                    // difference is used for graphically representing the min and max temperatures
                    let difference = ((maxTemp - minTemp) / 5).toFixed(2)
                    if (!celsius) difference = ((maxTemp - minTemp) / 9).toFixed(2)
                    return (
                        <div onClick={() => setActiveDay(uniqueVal)} key={uniqueVal} className="day">
                            {activeDay === uniqueVal && <IoMdArrowDropdown className="icon arrow-icon" />}
                            <h4 className="hour-day">{day}</h4>
                            <div className="day-img-container">
                                <img className="daily-img daily-img-1" src={`http://openweathermap.org/img/w/${iconMax}.png`} alt="climate-icon" />
                                <div className="img-dash"></div>
                                <img className="daily-img daily-img-2" src={`http://openweathermap.org/img/w/${iconMin}.png`} alt="climate-icon" />
                            </div>
                            <div className="max-min-container">
                                <h5>{Math.floor(maxTemp)} {temperatureIcon}</h5>
                                {/* height is set dynamically, hence using inline styling */}
                                <div style={{ height: `${difference}rem` }} className="temp-dash"></div>
                                <h5>{Math.floor(minTemp)} {temperatureIcon}</h5>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Daily
