// Code your solution here:
function driversWithRevenueOver(drivers, amount) {
  return drivers.filter(driver => driver.revenue > amount);
}

function driverNamesWithRevenueOver(drivers, amount) {
  return drivers.filter(driver => driver.revenue > amount).map(driver => driver.name);
} 

function exactMatch(drivers, driverObj) {
  let value = Object.values(driverObj)[0];
  return drivers.filter(driver => Object.values(driver).includes(value));
}

function exactMatchToList(drivers, driverObj) {
  let value = Object.values(driverObj)[0];
  return drivers.filter(driver => Object.values(driver).includes(value)).map(driver => driver.name);
}