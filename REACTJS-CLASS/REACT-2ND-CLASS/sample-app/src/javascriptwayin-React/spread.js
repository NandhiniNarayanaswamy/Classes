function App() {
    const person = {
        name: "nandhu",
        age: 89,
        city: "Hosur",
    }
    const person1 = { ...person, name: "laksh" }
    return (
        <>
            {JSON.stringify(person1)}
        </>
    )
}
export default App