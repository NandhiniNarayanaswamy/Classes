function App() {
    const person = {
        name: "nandhu",
        age: 89,
        city: "Hosur",
    }
    const person1 = { ...person, name: "laksh" }
    return (
        <>
            {JSON.stringify(person1)} //React doesn't know how to display an object directly.This converts the object into a string, And React is totally fine rendering strings, so it works.
        </>
    )
}
export default App;