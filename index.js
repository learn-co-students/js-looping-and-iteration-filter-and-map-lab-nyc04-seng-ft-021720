// Code your solution here:
function driversWithRevenueOver(array, number){
    return array.filter(function (driver){
        return driver.revenue > number
    })
}

function driverNamesWithRevenueOver(array, number){
    let drivers = driversWithRevenueOver(array, number)
    return drivers.map(function (drivers){
        return drivers.name 
    })
}


function exactMatch(array, attribute){

    let attributeKey = Object.keys(attribute)
    let attributeValues = Object.values(attribute)

    return array.filter(function (driver){
        return  driver[attributeKey[0]] === attributeValues[0]
    })
}


function exactMatchToList(array, attribute){

let filtered = exactMatch(array, attribute)
    return filtered.map(function (drivers){
        return drivers.name
    })
}