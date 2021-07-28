import React from 'react'
import { timestampUtility } from '../utilities/utilitiesFunctions'

function Hourly({ data }) {
    return (
        <section className="hourly-section">
            <h2 className="heading">Hourly</h2>
            <div className="hourly-container">

                {/* getting 7 timeframes of data for hourly climate representation */}
                {data.list.slice(0, 7).map(eachHour => {
                    const { day, hours } = timestampUtility(eachHour.dt)
                    const { dt_txt: uniqueVal, main: { temp }, weather: [{ main: climate, icon }] } = eachHour
                    return (
                        <div key={uniqueVal} className="hour">
                            <h4 className="hour-day">{day}</h4>
                            <h4 className="hour-time">{hours}</h4>
                            <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="climate-icon" />
                            <h3 className="hour-temp">{Math.floor(temp)} &#8451;</h3>
                            <h5>{climate}</h5>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Hourly
