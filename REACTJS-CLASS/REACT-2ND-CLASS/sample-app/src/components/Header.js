import logo from "../asset/images/clr.jpg"
function Header() {
    return (
        <>
            <header>
                <nav>
                    <img src={logo} alt="some img" />
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Header