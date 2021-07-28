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

const capitalizeUtility = (str) => {
    let strArray = str.toLowerCase().split(' ')
    const capitalizedStr = strArray.map(word => word.replace(word[0], word[0].toUpperCase())).join(' ')
    return capitalizedStr
}

export { timestampUtility, capitalizeUtility }