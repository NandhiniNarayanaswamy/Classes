function App() {
    const mobiles = ["LG", "Samsung", "OPPO", "VIVO"]
    return (
        <>
            <ul>
                {mobiles.map((mobile) =>
                    <li>{mobile}</li>
                )}
            </ul>
        </>
    )
}
export default App
// in react if wanted to loop the values of an array then we have to use "map" function