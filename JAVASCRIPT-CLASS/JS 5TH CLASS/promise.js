// Promise in javascript is an Object that represents the evenatual completion or failure of an aync operation.

//It allows us to handle async code more efficiently and we can use promise to avoid the callback hell

// State of the promise....

// 1) Pending state -- The initial state, the operation is not yet completed

// 2) Fulfilled (resovled)... The operation completed successfully and the result is available

// 3) Rejected...The operation failed and error reason is available


// syntacx ..promsie is created using the Promise constructor.
const mypromise = new Promise((resolve, reject) => {
    let success = false;
    if (success) {
        resolve("operation is successfull")
    } else {
        reject("operation is failed")
    }
})
//handling the promise.. we are going to handle the promise using .then(), .catch(), .finally() ->
//then >> for success | .catch() >> for failure | .finally() >> for both success and failure
mypromise
    .then((result) => {
        console.log("success :", result);

    })
    .catch((error) => {
        console.log("Error :", error);

    })
    .finally(() => {
        console.log("promise completed");

    })