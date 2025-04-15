fetch("https://jsonplaceholder.typicode.com/posts/1") //from which server u need to fetch the data
    .then(response => { //which runs once the server responds. 
        // This is the raw response from the server.
        //     It's not the data yet — it has all kind of info like http,... it reads the body 
        return response.json(); //it converts JSON string to JS object | then pause the actual data to the next then, internally it uses Json.parse() method
    })
    .then(data => {
        console.log("data is", data);

    })
//     response is the HTTP response you got from the server.

//     response.json() is a function that reads and parses the body of the response.

// It converts the raw data into a JavaScript object(from JSON format).

// return is used so the next.then() can receive the parsed data.