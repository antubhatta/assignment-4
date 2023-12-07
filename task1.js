function cubeNumber(number) {
    if (typeof number !== "number") {
        return "This is not a number";
    }

    return Math.pow(number, 3);
}
const num = cubeNumber('dfd');
console.log(num)
