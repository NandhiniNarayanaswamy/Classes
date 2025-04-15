// let arr = [2, 3, 4, 5]
// let arr1 = [10, 20, 30, 40]
// let merge = [1, ...arr, 5, 6, ...arr1]
// console.log(merge);
let arr = [1, 2, 3, 4]
//let arr1 = arr; //copied reference which is address
let arr1 = [...arr] //copies value not an address
arr1.push(5, 6, 7, 8, 9)
console.log(arr);
console.log(arr1);


