// Code your solution here:
function driversWithRevenueOver(array, number) {
    return array.filter(driver => driver.revenue >= number)
}

function driverNamesWithRevenueOver(array, number) {
    const newArray = driversWithRevenueOver(array, number).map(driver => driver.name)
    return newArray
}

function exactMatch(array, object) {
let key = Object.keys(object)[0]
let value = Object.values(object)[0]
const newArray = array.filter(driver => driver[key] === value)
return newArray
}

function exactMatchToList(array, object) {
    const newArray = exactMatch(array, object).map(driver => driver.name)
return newArray
}