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

console.log(findAddress({ street: 10, house: "15A", society: "Earth Perfect" }));
console.log(findAddress({ street: 10, society: "Earth Perfect" }));
console.log(findAddress({ street: 10 }));