// Code your solution here:
function driversWithRevenueOver(driver, revenue){
    return driver.filter(function (drivers){
        return drivers.revenue > revenue
    })
}


function driverNamesWithRevenueOver(driver, revenue){
    const drivers_over_revenue = driversWithRevenueOver(driver, revenue)
    return drivers_over_revenue.map(function (driver){ //the function (driver) is setting each unique object to be a driver
        return driver.name // similar to rubys Person.all.each do |person|, the first person is person and it will loop.s
    })
}


// function exactMatch(driver, object){
//     return driver.filter(function (drivers){
//         for(const key in object){
//             return drivers[key] === object[key]
//         }
//     })
// }

function exactMatch(driver, object){

    let key = Object.keys(object)[0]
    let value = Object.values(object)[0]
    return driver.filter(function (drivers){
        return drivers[key] === value
    })
}



function exactMatchToList(driver, object){
    let drivers = exactMatch(driver, object)
    return drivers.map(function (driver){
        return driver.name
    })
}