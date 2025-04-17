function App() {
    const sqroot = Math.sqrt(16);
    const txt = "HELLO";
    const txt1 = "fish"
    const uppercase = txt.toLowerCase()
    const lowercase = txt1.toUpperCase()
    const arr = [1, 2, 3, 4];
    const arrjoin = arr.join("***")

    return (
        <>
            <p>square root of 16 is {sqroot}</p>
            <p>Lowercase of txt is {uppercase}</p>
            <p>uppercase of text is {lowercase}</p>
            <p>array of join {arrjoin}</p>

        </>
    )
}
export default App