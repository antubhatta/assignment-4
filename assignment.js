function cubeNumber(number) {
    if (typeof number !== "number") {
        return "This is not a number";
    }

    return Math.pow(number, 3);
}

function matchFinder(string1, string2) {
    if (typeof string1 !== "string" || typeof string2 !== 'string') {
        return "Invalid input! Both input must be string type";
    }
    if (string1.includes(string2)) {
        return true;
    }
    else {
        return false;
    }
}

function sortMaker(arr) {
    if (arr[0] < 0 || arr[1] < 0) {
        return "Invalid input";
    }
    if (arr[0] === arr[1]) {
        return "equal";
    }
    if (arr[0] < arr[1]) {
        return [arr[1], arr[0]];
    }
    return arr;
}

function findAddress(obj) {
    let result = "";
    if (obj.street) {
        result += obj.street + ",";
    }
    else {
        result += "__,";
    }
    if (obj.house) {
        result += obj.house + ",";
    }
    else {
        result += "__,";
    }
    if (obj.society) {
        result += obj.society;
    }
    else {
        result += "__";
    }
    return result;
}

function canPay(changeArray, totalDue) {
    let sum = 0;
    if (changeArray.length === 0) {
        return "Invalid input!"
    }
    for (let i = 0; i < changeArray.length; i++) {
        sum = sum + changeArray[i];
    }
    if (sum >= totalDue) {
        return true;
    }
    else {
        return false;
    }
}