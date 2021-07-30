import React, { useState, useEffect } from 'react'
import { capitalizeUtility, convertDateUtility, getHourlyDataUtility } from '../utilities/utilitiesFunctions'

function Hourly({ data, activeDay, celsius, temperatureIcon }) {
    const [hourlyData, setHourlyData] = useState(null)
    const [displayDate, setDisplayDate] = useState({})

    useEffect(() => {
        const hourlyData = getHourlyDataUtility(data, activeDay)
        setHourlyData(hourlyData)
        // setting display heading
        const { day, month, dayNumber: date } = convertDateUtility(hourlyData[0].dt_txt)
        setDisplayDate({ ...displayDate, day, month, date })
    }, [activeDay, data, hourlyData, displayDate])

    return (
        <section className="hourly-section">
            {displayDate && <h2 className="heading">{`${displayDate.day}, 
                                    ${displayDate.month} ${displayDate.date}`}</h2>}
            <div className="hourly-container">
                {hourlyData && hourlyData.map(eachHour => {
                    const { dayName: day, hours12Format: hours } = convertDateUtility(eachHour.dt_txt)
                    const { dt_txt: uniqueVal, main: { temp }, weather: [{ icon, description: desc }] } = eachHour
                    return (
                        <div key={uniqueVal} className="hour">
                            <h4 className="hour-day">{day}</h4>
                            <h4 className="hour-time">{hours}</h4>
                            <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="climate-icon" />
                            <h3 className="hour-temp">{Math.floor(temp)} {temperatureIcon}</h3>
                            <h5>{capitalizeUtility(desc)}</h5>
                        </div>
                    )
                })}

            </div>
        </section>
    )
}

export default Hourly
