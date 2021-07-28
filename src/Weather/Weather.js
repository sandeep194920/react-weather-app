import React, { useState, useEffect } from 'react'
import Highlights from './HighlightsSection';
import Hourly from './HourlySection';
import axios from 'axios';
import { divideOnDatesUtility, getMaxTempUtility, getMinTempUtility } from '../utilities/utilitiesFunctions';
import Daily from './DailySection';

function Weather() {
    const [city, setCity] = useState('')
    const [darkTheme, setDarkTheme] = useState(false)
    const [data, setData] = useState();

    const api = {
        url: 'https://api.openweathermap.org/data/2.5/forecast?q=halifax,us&units=metric&appid=',
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
    // get all data
    useEffect(() => {
        getData()
    }, [])

    //data for 7 days
    useEffect(() => {
        if (!data) return
        const dividedData = divideOnDatesUtility(data.list)
        const min = getMinTempUtility(dividedData[1])
        const max = getMaxTempUtility(dividedData[1])
        console.log(min)
        console.log(max)
    }, [data])

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
                {data && <>
                    <Highlights data={data} />
                    <Hourly data={data} />
                    <Daily />
                </>}
            </main>
        </div >
    )
}

export default Weather

// max temp, min temp