// converts timestamp into date and time 
const timestampUtility = (timestamp) => {
    const unix_timestamp = timestamp
    const date = new Date(unix_timestamp * 1000);
    const hours24Format = date.getHours();
    const minutes = "0" + date.getMinutes();
    const day = date.toString().slice(0, 3)
    const month = date.toString().slice(4, 10)
    let hours = `${hours24Format % 12} a.m`;
    if (hours24Format > 12) {
        hours = `${hours24Format % 12} p.m`
    }
    return {
        day, hours, month, minutes
    }
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

export {
    timestampUtility,
    capitalizeUtility,
    divideOnDatesUtility,
    getMaxTempUtility,
    getMinTempUtility
}