import React, { useState } from 'react'
import { MdLocationOn } from "react-icons/md";
import { WiDaySunny, WiDayRain, WiDaySnowWind } from "react-icons/wi";
import { FaCloudSunRain } from 'react-icons/fa'
import { IoRainySharp, IoPartlySunny } from "react-icons/io5";
function Weather() {
    const [city, setCity] = useState('')

    return (
        // <main className="dark"> // can be enabled for dark mode in future
        <div className="content">
            <header>
                <nav>
                    <input type="text" onChange={(e) => setCity(e.target.value)} value={city} placeholder='Search City' />
                </nav>
            </header>
            <main>
                {/* highlights */}

                <section className="highlights-section">
                    <article className="city-time">
                        <div className="container">
                            <MdLocationOn className="city-icon icon" />
                            <h2>Toronto</h2>
                        </div>
                        <h4>At Tue., July 27 9.14 am.</h4>
                    </article>
                    <article className="temperature">
                        <div className="container">
                            <IoRainySharp className="climate-icon icon" />
                            <h1>23 &#8451;</h1>
                        </div>
                        <h5>24 &#8451; / 17 &#8451; Feels like 23 &#8457;</h5>
                        <div className="container">
                            {/* <IoRainySharp className="climate-icon icon" /> */}
                            <h4>Rain</h4>
                        </div>
                    </article>
                </section>

                {/* hourly */}

                <section className="hourly-section">
                    <h2 className="heading">Hourly</h2>
                    <div className="hourly-container">
                        <div className="hour">
                            <h4 className="hour-time">1 p.m.</h4>
                            <FaCloudSunRain className="hour-icon icon" />
                            <h3 className="hour-temp">19 &#8451;</h3>
                            <h5>Clouds</h5>
                        </div>

                        <div className="hour">
                            <h4 className="hour-time">Tue, 1 p.m.</h4>
                            <h4 className="hour-icon icon"><FaCloudSunRain /></h4>
                            <h4 className="hour-temp">19 &#8451;</h4>
                        </div>

                        <div className="hour">
                            <h4 className="hour-time">1 p.m.</h4>
                            <h4 className="hour-icon icon"><FaCloudSunRain /></h4>
                            <h4 className="hour-temp">19 &#8451;</h4>
                        </div>

                        <div className="hour">
                            <h4 className="hour-time">1 p.m.</h4>
                            <h4 className="hour-icon icon"><FaCloudSunRain /></h4>
                            <h4 className="hour-temp">19 &#8451;</h4>
                        </div>

                        <div className="hour">
                            <h4 className="hour-time">1 p.m.</h4>
                            <h4 className="hour-icon icon"><FaCloudSunRain /></h4>
                            <h4 className="hour-temp">19 &#8451;</h4>
                        </div>

                        <div className="hour">
                            <h4 className="hour-time">1 p.m.</h4>
                            <h4 className="hour-icon icon"><FaCloudSunRain /></h4>
                            <h4 className="hour-temp">19 &#8451;</h4>
                        </div>

                        <div className="hour">
                            <h4 className="hour-time">1 p.m.</h4>
                            <h4 className="hour-icon icon"><IoPartlySunny /></h4>
                            <h4 className="hour-temp">19 &#8451;</h4>
                        </div>
                    </div>
                </section>

                {/* Daily */}

            </main>
        </div >
    )
}

export default Weather
