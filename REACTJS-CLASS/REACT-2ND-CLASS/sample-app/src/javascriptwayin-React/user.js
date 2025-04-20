function App() {
    const isLoggedIn = true;
    const user = "nandhu"
    return (
        <>
            {isLoggedIn && <p>{user} is a good girl</p>} //&& is a shortcut for conditional rendering.

            {/* If the left side is true, it renders what's on the right. */}

            {/* If the left side is false, nothing gets rendered. */}
            <p>{user || "rama"}</p>
            {/* //If user is truthy (not null, undefined, false, 0, NaN, or ""), then it will render user. */}

            {/* If user is falsy, it will fall back to "rama".
            const user = "nandhu"; // truthy
            <p>{user || "rama"}</p> // outputs: <p>nandhu</p>

            const user = ""; // falsy
            <p>{user || "rama"}</p> // outputs: <p>rama</p> */}
        </>

    )
}
export default App