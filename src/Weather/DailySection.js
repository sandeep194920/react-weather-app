import React, { useState, useEffect } from 'react'
import { divideOnDatesUtility, getMaxTempUtility, convertDateUtility, getMinTempUtility } from '../utilities/utilitiesFunctions';
import { IoIosArrowDown } from "react-icons/io";

function Daily({ data, activeDay, setActiveDay }) {
    // const [activeDay, setActiveDay] = useState(0)

    const testFun = (val) => {
        console.log(`The val is ${val}`)
        setActiveDay(val)
    }
    //setting initial active selected day automatically to first day
    useEffect(() => {
        const dayArray = divideOnDatesUtility(data)
        const { dt } = getMaxTempUtility(dayArray[0])
        setActiveDay(dt)
    }, [])

    return (
        <section className="daily-section">
            <h2 className="heading">Daily</h2>
            <div className="daily-container">

                {divideOnDatesUtility(data).map(eachDay => {
                    const min = getMinTempUtility(eachDay)
                    const max = getMaxTempUtility(eachDay)
                    const { dt, dt_txt: uniqueVal, main: { temp_max: maxTemp }, weather: [{ icon: iconMax }] } = max
                    const { main: { temp_min: minTemp }, weather: [{ icon: iconMin }] } = min
                    const { dayOfWeek } = convertDateUtility(uniqueVal)

                    // difference is used for graphically representing the min and max temperatures
                    const difference = ((maxTemp - minTemp) / 5).toFixed(2)
                    return (
                        <div onClick={() => testFun(dt)} key={uniqueVal} className="day">
                            {activeDay === dt && <IoIosArrowDown className="icon arrow-icon" />}
                            <h4 className="hour-day">{dayOfWeek}</h4>
                            {/* <h4 className="hour-day">{date.toString()}</h4> */}
                            {/* <h4 className="hour-day">{eachDay[0].dt.toString()}</h4> */}
                            <div className="day-img-container">
                                <img className="daily-img daily-img-1" src={`http://openweathermap.org/img/w/${iconMax}.png`} alt="climate-icon" />
                                <div className="img-dash"></div>
                                <img className="daily-img daily-img-2" src={`http://openweathermap.org/img/w/${iconMin}.png`} alt="climate-icon" />
                            </div>
                            <div className="max-min-container">
                                <h5>{Math.floor(maxTemp)} &#8451;</h5>
                                {/* height is set dynamically, hence using inline styling */}
                                <div style={{ height: `${difference}rem` }} className="temp-dash"></div>
                                <h5>{Math.floor(minTemp)} &#8451;</h5>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Daily
