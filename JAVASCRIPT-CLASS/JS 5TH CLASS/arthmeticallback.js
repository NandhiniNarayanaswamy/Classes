function calculate(num1, num2, callback) {
    return callback(num1, num2);
}
function add(num1, num2) {
    return num1 + num2
}
function sub(num1, num2) {
    return num1 - num2
}
function mul(num1, num2) {
    return num1 * num2
}
console.log("Addition", calculate(10, 5, add));
console.log("Subtraction", calculate(10, 5, sub));
console.log("Multiplication", calculate(10, 5, mul));
