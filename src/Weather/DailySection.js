import React from 'react'
import { divideOnDatesUtility, getMaxTempUtility, getMinTempUtility, timestampUtility } from '../utilities/utilitiesFunctions';

function Daily({ data }) {

    return (
        <section className="daily-section">
            <h2 className="heading">Daily</h2>
            <div className="daily-container">

                {divideOnDatesUtility(data).map(eachDay => {
                    // eachDay gives array of same day with 8 different times

                    //get min and max objects
                    const min = getMinTempUtility(eachDay)
                    const max = getMaxTempUtility(eachDay)
                    const { dt_txt: uniqueVal, main: { temp_max: maxTemp }, weather: [{ icon: iconMax }] } = max
                    const { main: { temp_min: minTemp }, weather: [{ icon: iconMin }] } = min
                    const { day } = timestampUtility([eachDay[0].dt]) // taking the first time available here to get day
                    return (
                        <div key={uniqueVal} className="day">
                            <h4 className="hour-day">{day}</h4>
                            {/* <h4 className="hour-time">8 a.m.</h4> */}
                            <div className="day-img-container">
                                <img className="daily-img daily-img-1" src={`http://openweathermap.org/img/w/${iconMax}.png`} alt="climate-icon" />
                                <div className="img-dash"></div>
                                <img className="daily-img daily-img-2" src={`http://openweathermap.org/img/w/${iconMin}.png`} alt="climate-icon" />
                            </div>
                            {/* <h3 className="hour-temp">23 &#8451;</h3> */}
                            <div className="max-min-container">
                                <h5>{maxTemp} &#8451;</h5>
                                <div className="temp-dash"></div>
                                <h5>{minTemp} &#8451;</h5>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Daily
