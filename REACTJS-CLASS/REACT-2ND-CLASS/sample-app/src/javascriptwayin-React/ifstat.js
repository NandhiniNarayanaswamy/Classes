


function App() {
    const num = 10;
    let message;
    if (num < 10)
        message = "num is greater than 10";
    else if (num === 10)
        message = "num is equal to 10"
    else
        message = "num is lessar than 10"
    return (
        <>
            {message}
        </>

    )
}
export default App