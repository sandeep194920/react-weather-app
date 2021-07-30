import React, { useState, useEffect, useCallback } from 'react'
import Highlights from './HighlightsSection';
import Hourly from './HourlySection';
import axios from 'axios';
import Daily from './DailySection';
import { divideOnDatesUtility, getMaxTempUtility } from '../utilities/utilitiesFunctions';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import { FcSearch } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

function Weather() {
    const [search, setSearch] = useState('')
    const [city, setCity] = useState('Toronto')
    // const [darkTheme, setDarkTheme] = localStorage.get
    const [darkTheme, setDarkTheme] = useState(localStorage.getItem('darkTheme'))
    // const [darkTheme, setDarkTheme] = useState(false)
    const [data, setData] = useState();
    const [error, setError] = useState(false)
    // activeDay is the currently selected Day for which all the hours are displayed
    const [activeDay, setActiveDay] = useState(null)
    // if false it will be fahrenheit
    const [celsius, setCelsius] = useState(true)
    // if error occurs then the search will be set to previous search to avoid error display each time when units are converted. 
    const [prevSearch, setPrevSearch] = useState('')
    const api = {
        url: `https://api.openweathermap.org/data/2.5/forecast?q=${city},us&units=${celsius ? 'metric' : 'imperial'}&appid=`,
        key: process.env.REACT_APP_API_KEY
    }

    let temperatureIcon = <span>&#8451;</span>
    if (!celsius) temperatureIcon = <span>&#8457;</span>

    // get all data
    const getData = useCallback(async () => {
        try {
            const data = await axios(`${api.url}${api.key}`)
            setData(data.data)
            setPrevSearch(city)
        } catch (error) {
            console.log(error)
            setSearch('')
            setError(true)
            setCity(prevSearch)
        }
    }, [prevSearch, api.key, api.url, city])

    useEffect(() => {
        getData()
    }, [celsius, city, getData])

    //setting initial active selected day automatically to first day
    const setActiveDate = useCallback(() => {
        const dayArray = divideOnDatesUtility(data.list)
        const { dt_txt } = getMaxTempUtility(dayArray[0])
        setActiveDay(dt_txt)
    }, [data])

    useEffect(() => {
        if (!data) return
        // if the condition of !activeDay is not speicified 
        // then everytime when celsius to farhenheit is changed, 
        // the arrow points to first day
        if (!activeDay) {
            setActiveDate()
        }
    }, [data, activeDay, setActiveDate])

    //search city
    const searchCityHandler = () => {
        setCity(search)
        setSearch('')
        getData()
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


    // for preserving theme after page refresh
    const themeHandler = async () => {
        const currentTheme = localStorage.getItem('darkTheme')
        await localStorage.setItem('darkTheme', `${currentTheme === 'true' ? 'false' : 'true'}`)
        setDarkTheme(localStorage.getItem('darkTheme'))
    }

    useEffect(() => {
        if (darkTheme === "true") {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkTheme])

    return (
        <div>
            < header >
                <nav>
                    <a href="https://github.com/sandeep194920/react-weather-app">
                        <FaGithub className="icon git-icon" />
                    </a>
                    <div className="search-container">
                        <input type="text" onKeyDown={e => { e.key === "Enter" && searchCityHandler() }} onChange={(e) => setSearch(e.target.value)} value={search} placeholder='Search City' />
                        <FcSearch onClick={searchCityHandler} className=" search-icon" />
                    </div>
                    {
                        darkTheme === "false" ?
                            <BsToggleOff onClick={themeHandler} className="icon light-icon" />
                            :
                            <BsToggleOn onClick={themeHandler} className="icon light-icon" />
                    }
                </nav>
            </header>
            <main>
                {/* style={error && { display: 'none' }}  */}
                <>
                    {error && <h3 className="error">City not found <span>😢❤️‍🩹</span> Please try another city <span>🙏🏻</span> </h3>}
                    {data && <>
                        <Highlights data={data} celsius={celsius} setCelsius={setCelsius} />
                        {activeDay && <Hourly data={data.list}
                            activeDay={activeDay}
                            celsius={celsius}
                            temperatureIcon={temperatureIcon}
                        />}
                        <Daily data={data.list}
                            activeDay={activeDay}
                            setActiveDay={setActiveDay}
                            setActiveDate={setActiveDate}
                            celsius={celsius}
                            temperatureIcon={temperatureIcon}
                        />
                    </>}
                </>
            </main>
        </div >
    )
}

export default Weather