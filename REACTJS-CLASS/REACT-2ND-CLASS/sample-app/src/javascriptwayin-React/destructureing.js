function App() {
    //object
    const obj = {
        name: "nandhu",
        age: 78,
        city: "Hosur"
    }
    //object destructuring
    const { name, age, city } = obj
    //array
    const arr = [1, 2, 3, 4]
    //array destructuring
    const [one, two, three, four] = arr
    return (
        <>
            <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{city}</h1>
            <h1>array</h1>
            <p>{one}</p>
            <p>{two}</p>
            <p>{three}</p>
            <p>{four}</p>


        </>
    )
}
export default App