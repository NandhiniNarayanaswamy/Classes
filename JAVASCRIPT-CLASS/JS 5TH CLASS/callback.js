// A callback is the function that is passed as an arugument to another function
function greet(name, callback) {
    console.log(name);
    callback(); //executing the callback
}
function welcome() {
    console.log("Welcome");


}
greet("Nandhini", welcome); //calling the function by passing another function
//foreach
let number = [1, 2, 3, 4, 5]
number.forEach(function (number) {  //foreach is a function calling function in foreach function
    console.log(number * 2);

})