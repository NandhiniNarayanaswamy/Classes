function chooseFood(foodItem) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ food: foodItem, status: "chosen" }) //it returns to the .then()
        }, 1000)
    })
}

function placeOrder(order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            order.status = "order placed";
            resolve(order)
        }, 1000)
    })
}

function preparedFood(order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            order.status = "prepared";
            resolve(order)
        }, 1000)
    })
}

function packFood(order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            order.status = "packed";
            resolve(order)
        }, 1000)
    })
}
function deliverOrder(order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            order.status = "Delivered";
            resolve(order)
        }, 1000)
    })
}

chooseFood("biriyani") //value biriyani is passed to the func
    .then(placeOrder) //function name and the name inside the then func should be the same | it holds the value retured from the chooseFood pass the value to the placefood()
    .then(preparedFood)
    .then(packFood)
    .then(deliverOrder)
    .then((order) => console.log("Final order status is", order))

//Resolving a Promise means that the asynchronous operation finished successfully and returned a result.
//let promise = new Promise((resolve, reject) => {
// resolve("Pizza is here!");
// });
// Here, resolve("Pizza is here!") means the Promise is fulfilled.

// Whatever value you pass into resolve() will be available in .then().
