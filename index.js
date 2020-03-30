// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
	return drivers.filter(driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue){
	return drivers.filter(driver => driver.revenue > revenue).map(driver => driver.name);
}

function exactMatch(drivers, query){
	const queryKey = Object.keys(query)[0];
	return drivers.filter(driver => driver[queryKey] == query[queryKey]);
}

function exactMatchToList(drivers, query){
	return exactMatch(drivers, query).map(driver => driver.name);
}