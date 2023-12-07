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
console.log(sortMaker([2,3]));
console.log(sortMaker([4, 2]));
console.log(sortMaker([4, 4]));
console.log(sortMaker([1, 2]));
console.log(sortMaker([4, -2]));