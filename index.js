// Code your solution here

function findMatching(drivers, string) {
    return drivers.filter(name => {
        return name.toLowerCase() === string.toLowerCase();
    })
}

function fuzzyMatch(driver, string) {
    return driver.filter(name => {
        return name.slice(0, string.length) === string;
    });
}

function matchName(driver, string) {
    return driver.filter(function (driver) {
        return driver.name === string;
    })
}