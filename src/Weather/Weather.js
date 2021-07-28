import React, { useState, useEffect } from 'react'
import Highlights from './HighlightsSection';
import Hourly from './HourlySection';
import axios from 'axios';

function Weather() {
    const [city, setCity] = useState('')
    const [darkTheme, setDarkTheme] = useState(false)
    const [data, setData] = useState();

    const api = {
        url: 'https://api.openweathermap.org/data/2.5/forecast?q=halifax,us&cnt=7&units=metric&appid=',
        key: process.env.REACT_APP_API_KEY
    }
    const getData = async () => {
        try {
            const data = await axios(`${api.url}${api.key}`)
            setData(data.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        // <main className="dark"> // can be enabled for dark mode in future
        <div className={`content ${darkTheme && 'dark'}`} >
            {/* <div className="content"> */}
            < header >
                <nav>
                    <input type="text" onChange={(e) => setCity(e.target.value)} value={city} placeholder='Search City' />
                </nav>
            </header >
            <main>
                {data && <Highlights data={data} />}
                {data && <Hourly data={data} />}
            </main>
        </div >
    )
}

export default Weather


//
// list ->  dt_txt, weather[0] -> main, icon, 