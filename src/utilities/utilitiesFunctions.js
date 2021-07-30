//converts date into a day
const convertDateUtility = (date) => {
    const dayNumber = date.toString().slice(8, 10)
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayNum = new Date(date).getDay()
    let dayOfWeek = days[dayNum]
    const day = dayOfWeek
    let dayName = dayOfWeek.slice(0, 3)
    const month = new Date(date).toString().slice(4, 7)
    const hours24Format = new Date(date).getHours()
    const hours12Format = `${hours24Format % 12 === 0 ? 12 : hours24Format % 12}
                          ${hours24Format >= 12 ? 'p.m' : 'a.m'}`

    const today = new Date().toString().slice(0, 3)
    dayOfWeek = dayName === today ? dayName = 'Today' : dayOfWeek
    return { dayOfWeek, month, hours12Format, dayName, day, dayNumber }
}

// converts to upper case of first letter for each word in the string
const capitalizeUtility = (str) => {
    let strArray = str.toLowerCase().split(' ')
    const capitalizedStr = strArray.map(word => word.replace(word[0], word[0].toUpperCase())).join(' ')
    return capitalizedStr
}
// divide on Dates gets all the data and makes separate array of 
// objects having same date 
const divideOnDatesUtility = (data) => {
    const dailyDataList = data

    // dividing all data into 7 days 
    let dailyData = []
    let currentDate = ''
    dailyDataList.map((eachHour) => {
        // const eachday = eachHour['dt_txt'].slice(0, 10)
        // const eachday = eachHour[dt_txt]
        if (currentDate !== eachHour['dt_txt'].slice(0, 10)) {
            //create new array
            currentDate = eachHour['dt_txt'].slice(0, 10)
            dailyData.push([eachHour])
        }
        else {
            //append array
            dailyData[dailyData.length - 1].push(eachHour)
        }
    })
    return dailyData
}
// minTemp and maxTemp utilities return objects having 
// min and max temperatures respectively
const getMinTempUtility = (data) => {
    const minTemp = data.reduce((acc, cur) => {
        if (acc.main.temp_min < cur.main.temp_min) {
            return acc
        }
        return cur
    })
    return minTemp
}

const getMaxTempUtility = (data) => {
    const maxTemp = data.reduce((acc, cur) => {
        if (acc.main.temp_max > cur.main.temp_max) {
            return acc
        }
        return cur
    })
    return maxTemp
}

const getHourlyDataUtility = (data, activeDay) => {
    const activeDateStr = activeDay.toString().slice(0, 10)
    // we should have minimum 5 entries for Hourly Data, so we can take remaining data from next day
    let hourlyData = data.filter(hour => hour.dt_txt.includes(activeDateStr) && hour)
    let today = new Date();
    let tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    let tomorrowDateStr = tomorrow.toISOString().slice(0, 10)
    let count = hourlyData.length

    // let tomorrowData = data.filter(hour => hour.dt_txt.includes(tomorrowDateStr) && hour)
    if (count < 8) {
        let tomorrowData = data.filter(hour => {
            count++
            return (
                (hour.dt_txt.includes(tomorrowDateStr) && count <= 8) && hour
            )
        })
        return [...hourlyData, ...tomorrowData]
    }
    return hourlyData
}


export {
    capitalizeUtility,
    divideOnDatesUtility,
    getMaxTempUtility,
    getMinTempUtility,
    convertDateUtility,
    getHourlyDataUtility
}