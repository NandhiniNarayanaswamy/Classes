//----------how to write code in JS-------//
function App() {
    const name = "Nandhini";
    const city = "Bangalore"
    const greet = () => { //creating function
        return "Welcome to React"
    }
    const isLoggedIn = true
    const isStudent = true
    if (isStudent) {
        return <p>Yes i am student</p> //This code returns early, meaning the rest of your JSX (<h1>, <h3>, etc.) is never rendered. React components can only have one return, which gives the final JSX to be rendered.
    } else {
        return <p>I am not student</p>
    }
    return (
        <>
            <h1>Hey, {name}</h1>
            <h3>Are you from{city}</h3>
            <h4>{greet()}</h4>
            {isLoggedIn ? <p>Welcome back</p> : <p>Please Login</p>}
        </>
    )
}
export default App