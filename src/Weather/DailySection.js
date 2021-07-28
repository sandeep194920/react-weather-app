import React from 'react'

function Daily() {
    return (


        <section className="daily-section">
            <h2 className="heading">Daily</h2>
            <div className="daily-container">

                <div className="day">
                    <h4 className="hour-day">Mon</h4>
                    {/* <h4 className="hour-time">8 a.m.</h4> */}
                    <div className="day-img-container">
                        <img className="daily-img daily-img-1" src={`http://openweathermap.org/img/w/01d.png`} alt="climate-icon" />
                        <div className="img-dash"></div>
                        <img className="daily-img daily-img-2" src={`http://openweathermap.org/img/w/10n.png`} alt="climate-icon" />
                    </div>
                    {/* <h3 className="hour-temp">23 &#8451;</h3> */}
                    <div className="max-min-container">
                        <h5>23 &#8451;</h5>
                        <div className="temp-dash"></div>
                        <h5>14 &#8451;</h5>
                    </div>
                </div>

                <div className="day">
                    <h4 className="hour-day">Tue</h4>
                    {/* <h4 className="hour-time">8 a.m.</h4> */}
                    <div className="day-img-container">
                        <img className="daily-img daily-img-1" src={`http://openweathermap.org/img/w/01d.png`} alt="climate-icon" />
                        <div className="img-dash"></div>
                        <img className="daily-img daily-img-2" src={`http://openweathermap.org/img/w/10n.png`} alt="climate-icon" />
                    </div>
                    {/* <h3 className="hour-temp">23 &#8451;</h3> */}
                    <div className="max-min-container">
                        <h5>23 &#8451;</h5>
                        <div className="temp-dash"></div>
                        <h5>14 &#8451;</h5>
                    </div>
                </div>

                <div className="day">
                    <h4 className="hour-day">Wed</h4>
                    {/* <h4 className="hour-time">8 a.m.</h4> */}
                    <div className="day-img-container">
                        <img className="daily-img daily-img-1" src={`http://openweathermap.org/img/w/01d.png`} alt="climate-icon" />
                        <div className="img-dash"></div>
                        <img className="daily-img daily-img-2" src={`http://openweathermap.org/img/w/10n.png`} alt="climate-icon" />
                    </div>
                    {/* <h3 className="hour-temp">23 &#8451;</h3> */}
                    <div className="max-min-container">
                        <h5>23 &#8451;</h5>
                        <div className="temp-dash"></div>
                        <h5>14 &#8451;</h5>
                    </div>
                </div>

                <div className="day">
                    <h4 className="hour-day">Thu</h4>
                    {/* <h4 className="hour-time">8 a.m.</h4> */}
                    <div className="day-img-container">
                        <img className="daily-img daily-img-1" src={`http://openweathermap.org/img/w/01d.png`} alt="climate-icon" />
                        <div className="img-dash"></div>
                        <img className="daily-img daily-img-2" src={`http://openweathermap.org/img/w/10n.png`} alt="climate-icon" />
                    </div>
                    {/* <h3 className="hour-temp">23 &#8451;</h3> */}
                    <div className="max-min-container">
                        <h5>23 &#8451;</h5>
                        <div className="temp-dash"></div>
                        <h5>14 &#8451;</h5>
                    </div>
                </div>

                <div className="day">
                    <h4 className="hour-day">Fri</h4>
                    {/* <h4 className="hour-time">8 a.m.</h4> */}
                    <div className="day-img-container">
                        <img className="daily-img daily-img-1" src={`http://openweathermap.org/img/w/01d.png`} alt="climate-icon" />
                        <div className="img-dash"></div>
                        <img className="daily-img daily-img-2" src={`http://openweathermap.org/img/w/10n.png`} alt="climate-icon" />
                    </div>
                    {/* <h3 className="hour-temp">23 &#8451;</h3> */}
                    <div className="max-min-container">
                        <h5>23 &#8451;</h5>
                        <div style={{ height: '2rem' }} className="temp-dash"></div>
                        <h5>14 &#8451;</h5>
                    </div>
                </div>

            </div>


        </section>
        // <section className="hourly-section">
        //     <h2 className="heading">Hourly</h2>
        //     <div className="hourly-container">

        //         {/* getting 7 timeframes of data for hourly climate representation */}
        //         {data.list.slice(0, 7).map(eachHour => {
        //             const { day, hours } = timestampUtility(eachHour.dt)
        //             const { dt_txt: uniqueVal, main: { temp }, weather: [{ main: climate, icon }] } = eachHour
        //             return (
        // <div key={uniqueVal} className="hour">
        //     <h4 className="hour-day">{day}</h4>
        //     <h4 className="hour-time">{hours}</h4>
        //     <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="climate-icon" />
        //     <h3 className="hour-temp">{Math.floor(temp)} &#8451;</h3>
        //     <h5>{climate}</h5>
        // </div>
        //             )
        //         })}
        //     </div>
        // </section>
    )
}

export default Daily
