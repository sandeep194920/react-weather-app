import React, { useState, useEffect } from 'react'
import Highlights from './HighlightsSection';
import Hourly from './HourlySection';
import axios from 'axios';
import Daily from './DailySection';
import { divideOnDatesUtility, getMaxTempUtility } from '../utilities/utilitiesFunctions';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import { FcSearch } from "react-icons/fc";

function Weather() {
    const [city, setCity] = useState('toronto')
    const [darkTheme, setDarkTheme] = useState(false)
    const [data, setData] = useState();
    const [error, setError] = useState(false)
    // activeDay is the currently selected Day for which all the hours are displayed
    const [activeDay, setActiveDay] = useState(null)
    const api = {
        url: `https://api.openweathermap.org/data/2.5/forecast?q=${city},us&units=metric&appid=`,
        key: process.env.REACT_APP_API_KEY
    }

    // get all data
    const getData = async () => {
        try {
            const data = await axios(`${api.url}${api.key}`)
            console.log(data)
            setData(data.data)
        } catch (error) {
            console.log(error)
            setError(true)
        }
    }
    useEffect(() => {
        getData()
    }, [])

    //setting initial active selected day automatically to first day
    const setActiveDate = () => {
        const dayArray = divideOnDatesUtility(data.list)
        const { dt_txt } = getMaxTempUtility(dayArray[0])
        setActiveDay(dt_txt)
    }

    useEffect(() => {
        if (!data) return
        setActiveDate()
    }, [])

    //search city
    const searchCityHandler = () => {
        getData()
        setCity('')
    }

    // if error, show error for 3 seconds
    useEffect(() => {
        if (!error) return
        const timerId = setTimeout(() => {
            setError(false)
        }, 3000)
        return () => {
            clearTimeout(timerId)
        }
    }, [error])

    return (
        // <main className="dark"> // can be enabled for dark mode in future
        <div className={`content ${darkTheme && 'dark'}`} >
            < header >
                <nav>
                    <div className="search-container">
                        <input type="text" onKeyDown={e => { e.key === "Enter" && searchCityHandler() }} onChange={(e) => setCity(e.target.value)} value={city} placeholder='Search City' />
                        <FcSearch onClick={searchCityHandler} className=" search-icon" />
                    </div>
                    {
                        darkTheme ?
                            <BsToggleOff onClick={() => setDarkTheme(prev => !prev)} className="icon light-icon" />
                            :
                            <BsToggleOn onClick={() => setDarkTheme(prev => !prev)} className="icon light-icon" />
                    }
                </nav>
            </header>
            <main>
                <>
                    {error ? <h3 className="error">City not found <span>😢❤️‍🩹</span> Please try another city <span>🙏🏻</span> </h3> : null}
                    {data && <>
                        <Highlights data={data} />
                        {activeDay && <Hourly data={data.list} activeDay={activeDay} />}
                        <Daily data={data.list}
                            activeDay={activeDay}
                            setActiveDay={setActiveDay}
                            setActiveDate={setActiveDate} />
                    </>}
                </>
            </main>
        </div >
    )
}

export default Weather