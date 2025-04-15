//----------------Asynchronous-------------------//
// console.log("a");
// console.log("b");
// console.log("c");
// console.log("d");
// function add() {
//     let sum = 0;
//     for (let i = 0; i <= 20; i++) {
//         sum += i;
//         console.log("adding", i, "current", sum);

//     }
//     console.log(sum);

// }

// setTimeout(() => {
//     add();
// }, 1000)
// console.log("e");
// console.log("f");
//-----------------------------------------------------//
console.log("a");
console.log("b");
console.log("c");
console.log("d");
setTimeout(() => {
    console.log("e");

}, 2000)
console.log("g");

setTimeout(() => {
    console.log("h");

}, 5000)
setTimeout(() => {
    console.log("o");

}, 1000) //1000 seconds


