// error handling in javascript is used to manage and respond to runtime errors/

//javascript provides multiple ways to handle the errors we can use try, catch, throw and finally....
// try {
//     let x = 10;
//     // let y = 2;
//     let r = x / y;
//     console.log(r);
// } catch (error) {
//     console.log("error is :", error.message);

// }
// function divide(a,b){
//     try{
//         if(b===0){
//             throw new Error("number cannot divide by zero");

//         }
//         return a/b;
//     }
//     catch(error)
//     {
//         console.log("error", error.message);

//     }
// }
// console.log(divide(10,2));
//------------------------------------------------------------//

// try {
//     console.log(name);

// } catch (error) {
//     console.log("Error is:", error.message);

// }
//---------------------------------------------------//
try {
    let num = 9;
    num();
} catch (error) {
    console.log("error is:", error.message);

}
finally {
    console.log("done");

}
// finally is the block where it is going to execute both the case positive and neg....
// finally block always exectutes regardless of whether an error occurs.