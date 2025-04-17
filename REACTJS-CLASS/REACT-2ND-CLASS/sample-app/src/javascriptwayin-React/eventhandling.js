function App() {
    const handle = () => { alert('clicked') }
    return (
        <>
            <button onClick={handle}>submit</button>
            <button onClick={() => { alert('clicked1') }}>Submit1</button>
        </>
    )
}
export default App