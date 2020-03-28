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



    return array.filter(function (driver){
        for(const key in driver){

            return driver[key] == attribute[key]

        }
    })
}


function exactMatchToList(array, attribute){

let filtered = exactMatch(array, attribute)
    return filtered.map(function (drivers){
        return drivers.name
    })
}