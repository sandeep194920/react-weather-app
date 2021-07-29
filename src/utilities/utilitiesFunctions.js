//converts date into a day
const convertDateUtility = (date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayNum = new Date(date).getDay()
    let dayOfWeek = days[dayNum]
    const dayName = dayOfWeek
    const month = new Date(date).toString().slice(4, 7)
    const hours24Format = new Date(date).getHours()
    const hours12Format = `${hours24Format % 12 === 0 ? 12 : hours24Format % 12}
                          ${hours24Format > 12 ? 'a.m' : 'p.m'}`

    const today = new Date().toString().slice(0, 3)
    console.log(`The month is ${new Date(date)}`);
    dayOfWeek = dayOfWeek === today ? dayOfWeek = 'Today' : dayOfWeek
    return { dayOfWeek, month, hours12Format, dayName }
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
    capitalizeUtility,
    divideOnDatesUtility,
    getMaxTempUtility,
    getMinTempUtility,
    convertDateUtility
}