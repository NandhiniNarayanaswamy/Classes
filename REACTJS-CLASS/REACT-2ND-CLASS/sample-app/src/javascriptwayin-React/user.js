function App() {
    const isLoggedIn = true;
    const user = "nandhu"
    return (
        <>
            {isLoggedIn && <p>{user} is a good girl</p>}
            <p>{user || "rama"}</p>
        </>

    )
}
export default App