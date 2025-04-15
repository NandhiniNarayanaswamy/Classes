//callback hell happens when multiple async operation are nested inside each other
function loginuser(username, password, callback) {
    setTimeout(() => {
        console.log("user logged in");
        callback();
    }, 1000)
}

function fetchUserdata(callback) {
    setTimeout(() => {
        console.log("Fetched user data");
        callback();
    }, 1000)
}

function getOrderDetails(callback) {
    setTimeout(() => {
        console.log("Fetched user order detail's");
        callback();
    }, 1000)
}

function processPayment(callback) {
    setTimeout(() => {
        console.log("payment process successfull");
        callback();
    }, 1000)
}

loginuser("Nandhini", "675", function () { //callback hell come in pyramid shape think about 100 line code its really hard thatis y no one is using in real time project
    fetchUserdata(function () {
        getOrderDetails(function () {
            processPayment(function () {
                console.log("order completed");

            })
        })
    })
})